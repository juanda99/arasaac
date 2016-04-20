export const TOGGLE_FILTER = 'TOGGLE_FILTER'

// Resets the currently visible error message.
export function togleFilter(filter, value) {
  return {
    type: TOGGLE_FILTER,
    filter: filter
  }
}

// Updates error message to notify about the failed fetches.

const filters = (state = {'catalog': true, 'license': true, 'size': true}, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      var myFilter = {}
      myFilter[action.filter] = !myFilter[action.filter]
      return Object.assign({}, state, myFilter)
    default:
      return state
  }
}

export default filters
