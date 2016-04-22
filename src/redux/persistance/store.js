import * as storage from './storage'
import { TOGGLE_FILTER, INITIAL_FILTERS } from 'redux/modules/filters'
import { PICTOGRAMS_LAYOUT } from 'redux/modules/layout'
import { LOCALE_CHANGE } from 'redux/modules/locale'
import { SHOW_FILTER } from 'redux/modules/showFilter'

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
            var kk = filters
            var kk2 = JSON.stringify(filters)
            storage.put('filters', JSON.stringify(filters))
            break
          case PICTOGRAMS_LAYOUT:
            storage.put('layout', action.text)
            break
          case LOCALE_CHANGE:
            storage.put('locale', action.text)
            break
          case SHOW_FILTER:
            let showFilter = storage.get('showFilter') || false
            storage.put('showFilter', !showFilter)
        }
        return action
      }
    })
  }
}
