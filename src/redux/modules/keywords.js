import { CALL_API, Schemas } from '../middleware/api'
import isEmpty from 'lodash/isEmpty'

export const KEYWORDS_REQUEST = 'KEYWORDS_REQUEST'
export const KEYWORDS_SUCCESS = 'KEYWORDS_SUCCESS'
export const KEYWORDS_FAILURE = 'KEYWORDS_FAILURE'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchKeywords() {
  return {
    [CALL_API]: {
      types: [ KEYWORDS_REQUEST, KEYWORDS_SUCCESS, KEYWORDS_FAILURE ],
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
    if (!isEmpty(keywords)) {
      return null
    }
    return dispatch(fetchKeywords())
  }
}
