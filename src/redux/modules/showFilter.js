export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export function toggleFilter(text) {
  return {
    type: TOGGLE_FILTER,
    text: text
  }
}

// default state should also be default state for toggle component
export default function showFilter(state = false, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.text
    default:
      return state
  }
}
