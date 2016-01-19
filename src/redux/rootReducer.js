import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import locale from './modules/locale'

export default combineReducers({
  locale,
  counter,
  router
})
