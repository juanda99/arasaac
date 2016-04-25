import { TOGGLE_FILTER, INITIAL_FILTERS } from '../constants.js'

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
