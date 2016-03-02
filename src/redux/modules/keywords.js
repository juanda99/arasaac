import { CALL_API, Schemas } from '../middleware/api'

export const KEYWORDS_REQUEST = 'KEYWORDS__REQUEST'
export const KEYWORDS__SUCCESS = 'KEYWORDS__SUCCESS'
export const KEYWORDS__FAILURE = 'KEYWORDS__FAILURE'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchKeywords() {
  return {
    [CALL_API]: {
      types: [ KEYWORDS_REQUEST, KEYWORDS__SUCCESS, KEYWORDS__FAILURE ],
      endpoint: 'pictogramKeywords/',
      schema: Schemas.KEYWORDS
    }
  }
}

// Fetches all keywords for pictograms from our API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadKeywords() {
  return (dispatch, getState) => {
    const keywords = getState().entities.keywords
    if (keywords) {
      return null
    }
    return dispatch(fetchKeywords())
  }
}
