export const LOCALE_CHANGE = 'LOCALE_CHANGE'
export function localeChange (text) {
  return { type: LOCALE_CHANGE, text: text }
}
export default function locale (state = 'en', action) {
  switch (action.type) {
    case LOCALE_CHANGE:
      return action.text
    default:
      return state
  }
}
