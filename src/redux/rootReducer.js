import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import merge from 'lodash/merge'
import locale from './modules/locale'
import errorMessage from './modules/error'
import searchText from './modules/searchText'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {}, searchs: {}, keywords: { 'en': { 'keywords': [] } } }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

export default combineReducers({
  locale,
  router,
  searchText,
  errorMessage,
  entities
})
