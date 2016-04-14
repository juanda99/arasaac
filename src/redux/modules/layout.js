export const PICTOGRAMS_LAYOUT = 'PICTOGRAMS_LAYOUT'

// Resets the currently visible error message.
export function changePictogramsLayout(text) {
  return {
    type: PICTOGRAMS_LAYOUT,
    text: text
  }
}

// Updates error message to notify about the failed fetches.
export default function layout(state = 'list', action) {
  switch (action.type) {
    case PICTOGRAMS_LAYOUT:
      return action.text
    default:
      return state
  }
}
