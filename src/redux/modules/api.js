import { CALL_API, Schemas } from '../middleware/api'

export const PICTO_KEYWORDS_REQUEST = 'PICTO_KEYWORDS__REQUEST'
export const PICTO_KEYWORDS__SUCCESS = 'PICTO_KEYWORDS__SUCCESS'
export const PICTO_KEYWORDS__FAILURE = 'PICTO_KEYWORDS__FAILURE'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchPictoKeywords() {
  return {
    [CALL_API]: {
      types: [ PICTO_KEYWORDS_REQUEST, PICTO_KEYWORDS__SUCCESS, PICTO_KEYWORDS__FAILURE ],
      endpoint: 'pictogramKeywords/',
      schema: Schemas.PICTOKEYWORDS
    }
  }
}

// Fetches all keywords for pictograms from our API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadPictoKeywords() {
  return (dispatch, getState) => {
    const pictoKeywords = getState().entities.pictoKeywords
    if (pictoKeywords) {
      return null
    }
    return dispatch(fetchPictoKeywords())
  }
}
