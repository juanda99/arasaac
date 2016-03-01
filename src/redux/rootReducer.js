import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import locale from './modules/locale'
import errorMessage from './modules/error'
import pictogramsKeyword from './modules/keyword'
export default combineReducers({
  locale,
  router,
  pictogramsKeyword,
  errorMessage
})
