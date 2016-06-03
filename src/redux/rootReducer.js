import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import merge from 'lodash/merge'
import locale from './modules/locale'
import errorMessage from './modules/error'
import layout from './modules/layout'
import filters from './modules/filters'
import showFilter from './modules/showFilter'
import auth from './modules/auth'
import paginate from './paginate'
import { PICTOGRAMS_REQUEST, PICTOGRAMS_SUCCESS, PICTOGRAMS_FAILURE } from './constants'

// maybe it should go to main.js, to the complete initialState
const initialState = {
  pictograms: {},
  keywords: {
    'en': {
      'keywords': []
    },
    'es': {
      'keywords': []
    },
    'fr': {
      'keywords': []
    }
  }
}

// Updates an entity cache in response to any action with response.entities.
function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates the pagination data for different actions.
/*
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
*/
// Stores for GUIS

const gui = combineReducers({
  layout,
  filters,
  showFilter
})

const rootReducer = combineReducers({
  auth,
  locale,
  router,
  gui,
  errorMessage,
  entities,
  // pagination,
  form: formReducer
})

export default rootReducer
