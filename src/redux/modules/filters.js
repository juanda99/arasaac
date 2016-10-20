import { TOGGLE_FILTER } from '../constants.js'

export const initialState = {
  catalog: true,
  license: true,
  size: true
}

function action(type, payload = {}) {
  return {type, ...payload}
}

export const actions = {
  toggleFilter: (filter, value) => action(TOGGLE_FILTER, {filter})
}

// Updates error message to notify about the failed fetches.

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      var myFilter = {}
      myFilter[action.filter] = !state[action.filter]
      return Object.assign({}, state, myFilter)
    default:
      return state
  }
}
