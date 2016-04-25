import { LOCALE_CHANGE } from '../constants.js'

export function localeChange(text) {
  return { type: LOCALE_CHANGE, text: text }
}
export default function locale(state = 'en', action) {
  switch (action.type) {
    case LOCALE_CHANGE:
      return action.text
    default:
      return state
  }
}
