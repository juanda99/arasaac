import { CALL_API, Schemas } from '../middleware/api'

export const PICTOGRAMS_REQUEST = 'PICTOGRAMS_REQUEST'
export const PICTOGRAMS_SUCCESS = 'PICTOGRAMS_SUCCESS'
export const PICTOGRAMS_FAILURE = 'PICTOGRAMS_FAILURE'

// Fetches all keywords for pictos
// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchPictograms(searchText) {
  return {
    [CALL_API]: {
      types: [ PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE ],
      endpoint: `search/${searchText}`,
      schema: Schemas.SEARCH
    }
  }
}

export function loadPictograms(searchText) {
  return (dispatch, getState) => {
    const search = getState().entities.searchs[searchText]
    if (search) {
      return null
    }
    return dispatch(fetchPictograms(searchText))
  }
}
