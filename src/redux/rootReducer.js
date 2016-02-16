import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import locale from './modules/locale'
import counter from './modules/counter'

export default combineReducers({
  locale,
  router,
  counter
})
