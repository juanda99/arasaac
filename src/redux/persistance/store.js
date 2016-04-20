import * as storage from './storage'

export default function persistenceHandler(next) {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch(action) {
        store.dispatch(action)
        storage.put('locale', store.getState().locale)
        return action
      }
    })
  }
}
