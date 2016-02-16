export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

export function increment (text) {
  return { type: COUNTER_INCREMENT, text }
}

export default function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.text
    default:
      return state
  }
}
