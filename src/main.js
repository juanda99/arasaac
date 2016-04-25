import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import it from 'react-intl/locale-data/it'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import injectTapEventPlugin from 'react-tap-event-plugin'
import * as storage from 'redux/persistance/storage'
import { INITIAL_FILTERS, INITIAL_LAYOUT } from 'redux/constants'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// upps, should I check this with server rendering...
// const initialState = window.__INITIAL_STATE__

// we want to save objects in localStorage
// see http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage

const initialState = {
  locale: storage.get('locale') || 'en',
  gui: {
    layout: storage.get('layout') || INITIAL_LAYOUT,
    showFilter: storage.get('showFilter') === 'true',
    filters: JSON.parse(storage.get('filters')) || INITIAL_FILTERS
  }
}

const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.router
})

// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = makeRoutes(store)

addLocaleData(en)
addLocaleData(de)
addLocaleData(it)
addLocaleData(es)
addLocaleData(fr)

// All modern browsers, expect `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl) {
  require.ensure(['intl'], require => {
    require('intl')
    start()
  }, 'IntlBundle')
} else {
  start()
}

function start() {
  // Now that redux and react-router have been configured, we can render the
 // React application to the DOM!
  ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
    document.getElementById('root')
  )
}
