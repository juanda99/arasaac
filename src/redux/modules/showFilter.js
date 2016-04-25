import { SHOW_FILTER } from '../constants.js'

export function toggleShowFilter() {
  return {
    type: SHOW_FILTER
  }
}

// default state should also be default state for toggle component
export default function showFilter(state = false, action) {
  switch (action.type) {
    case SHOW_FILTER:
      return !state
    default:
      return state
  }
}
