import { CALL_API, Schemas } from '../middleware/api'
import isEmpty from 'lodash/isEmpty'
import { KEYWORDS_REQUEST, KEYWORDS_SUCCESS, KEYWORDS_FAILURE } from '../constants.js'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchKeywords() {
  return {
    [CALL_API]: {
      types: [ KEYWORDS_REQUEST, KEYWORDS_SUCCESS, KEYWORDS_FAILURE ],
      endpoint: 'keywords',
      schema: Schemas.KEYWORDS_ARRAY
    }
  }
}

// Fetches all keywords for pictograms from our API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadKeywords(locale) {
  return (dispatch, getState) => {
    const keywords = getState().entities.keywords[locale].keywords
    if (!isEmpty(keywords)) {
      return null
    }
    return dispatch(fetchKeywords())
  }
}
