export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const INITIAL_FILTERS = {'catalog': true, 'license': true, 'size': true}

// Resets the currently visible error message.
export function toggleFilter(filter, value) {
  return {
    type: TOGGLE_FILTER,
    filter: filter
  }
}

// Updates error message to notify about the failed fetches.

const filters = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      var myFilter = {}
      myFilter[action.filter] = !state[action.filter]
      return Object.assign({}, state, myFilter)
    default:
      return state
  }
}

export default filters
