import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import merge from 'lodash/merge'
import locale from './modules/locale'
import errorMessage from './modules/error'
import searchText from './modules/searchText'
import layout from './modules/layout'
import paginate from './paginate'
import {PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE} from 'redux/modules/pictograms'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { pictograms: {}, keywords: { 'en': { 'keywords': [] } } }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  pictogramsBySearchText: paginate({
    mapActionToKey: action => action.searchText,
    types: [
      PICTOGRAMS_REQUEST,
      PICTOGRAMS_SUCCESS,
      PICTOGRAMS_FAILURE
    ]
  })
})

// Stores for GUIS

const gui = combineReducers({
  searchText,
  layout
})



const rootReducer = combineReducers({
  locale,
  router,
  gui,
  errorMessage,
  entities,
  pagination
})

export default rootReducer
