import * as storage from './storage'
import { TOGGLE_FILTER, INITIAL_FILTERS, PICTOGRAMS_LAYOUT, LOCALE_CHANGE, SHOW_FILTER } from 'redux/constants'

export default function persistenceHandler(next) {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch(action) {
        store.dispatch(action)
        switch (action.type) {
          case TOGGLE_FILTER:
            let filters = JSON.parse(storage.get('filters')) || INITIAL_FILTERS
            filters[action.filter] = !filters[action.filter]
            storage.put('filters', JSON.stringify(filters))
            break
          case PICTOGRAMS_LAYOUT:
            storage.put('layout', action.text)
            break
          case LOCALE_CHANGE:
            storage.put('locale', action.text)
            break
          case SHOW_FILTER:
            var value = storage.get('showFilter') === 'true'
            // let showFilter = storage.get('showFilter') || false
            storage.put('showFilter', !value)
        }
        return action
      }
    })
  }
}
