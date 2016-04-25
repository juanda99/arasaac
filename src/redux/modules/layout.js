import { PICTOGRAMS_LAYOUT, INITIAL_LAYOUT } from '../constants.js'

// initial layout could be list but not for mobiles

// Resets the currently visible error message.
export function changePictogramsLayout(text) {
  return {
    type: PICTOGRAMS_LAYOUT,
    text: text
  }
}

// Updates error message to notify about the failed fetches.
export default function layout(state = INITIAL_LAYOUT, action) {
  switch (action.type) {
    case PICTOGRAMS_LAYOUT:
      return action.text
    default:
      return state
  }
}
