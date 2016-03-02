export const CHANGE_PICTOGRAMS_KEYWORD = 'CHANGE_PICTOGRAMS_KEYWORD'

// Resets the currently visible error message.
export function changePictogramsKeyword(text) {
  return {
    type: CHANGE_PICTOGRAMS_KEYWORD,
    text: text
  }
}

// Updates error message to notify about the failed fetches.
export default function pictogramsKeyword(state = '', action) {
  switch (action.type) {
    case CHANGE_PICTOGRAMS_KEYWORD:
      return action.text
    default:
      return state
  }
}
