import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'react-router-redux'
import api from './middleware/api'
import persistenceStore from 'redux/persistance/store'
import createSagaMiddleware, { END } from 'redux-saga'

const storeEnhancers = [
  persistenceStore
]

export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware()
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, api, routerMiddleware(history), sagaMiddleware)
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    storeEnhancers.push(devTools)
  }
  middleware = compose(middleware, ...storeEnhancers)

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
