import { CALL_API, Schemas } from '../middleware/api'
import { PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE } from '../constants.js'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchPictograms(searchText, nextPageUrl) {
  return {
    searchText,
    [CALL_API]: {
      types: [ PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE ],
      endpoint: nextPageUrl,
      schema: Schemas.PICTO_ARRAY
    }
  }
}

export function loadPictograms(searchText, nextPage) {
  return (dispatch, getState) => {
    const {
      // nextPageUrl = `search/${searchText}`,
      nextPageUrl = `images?where=name.es.keyword==${searchText}`,
      pageCount = 0
    } = getState().pagination.pictogramsBySearchText[searchText] || {}

    if (pageCount > 0 && !nextPage) {
      return null
    }
    return dispatch(fetchPictograms(searchText, nextPageUrl))
  }
}

