import { CALL_API, Schemas } from '../middleware/api'

export const PICTOGRAMS_REQUEST = 'PICTOGRAMS_REQUEST'
export const PICTOGRAMS_SUCCESS = 'PICTOGRAMS_SUCCESS'
export const PICTOGRAMS_FAILURE = 'PICTOGRAMS_FAILURE'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchPictograms(searchText, nextPageUrl) {
  return {
    searchText,
    [CALL_API]: {
      types: [ PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE ],
      endpoint: nextPageUrl,
      schema: Schemas.SEARCH
    }
  }
}

export function loadPictograms(searchText, nextPage) {
  return (dispatch, getState) => {
    const {
      nextPageUrl = `search/${searchText}`,
      pageCount = 0
    } = getState().pagination.pictogramsBySearchText[searchText] || {}

    if (pageCount > 0 && !nextPage) {
      return null
    }
    return dispatch(fetchPictograms(searchText, nextPageUrl))
  }
}

