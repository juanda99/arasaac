export const SHOW_FILTER = 'SHOW_FILTER'

export function toggleShowFilter(text) {
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
