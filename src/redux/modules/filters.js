export const CHANGE_FILTER = 'CHANGE_FILTER'

// Resets the currently visible error message.
export function changeFilter(filter, value) {
  return {
    type: CHANGE_FILTER,
    filter: filter,
    value: value
  }
}

// Updates error message to notify about the failed fetches.

const filter = (state = {'catalog': true, 'license': true, 'size': true}, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      var myFilter = {}
      myFilter[action.filter] = !action.value
      return Object.assign({}, state, myFilter)
    default:
      return state
  }
}

export default filter
