import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { routerActions } from 'react-router-redux'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
// import CoreLayout from 'layouts/CoreLayout/CoreLayout'
// import HomeView from 'views/HomeView/HomeView'
import HomeView from 'views/HomeView/HomeView'
import BingoView from 'views/BingoView/BingoView'
import SearchPictogramsView from 'views/SearchPictogramsView'
import ShowPictogramsView from 'views/ShowPictogramsView'
import PictogramView from 'views/PictogramView'
import PictogramsGridView from 'views/PictogramsGridView/PictogramsGridView'
import RegisterView from 'views/RegisterView'
import AppConfView from 'views/AppConfView'
import SigninView from 'views/SigninView'
import SignoutView from 'views/SignoutView'
// import SearchView from 'views/SearchView'
// import ApiView from 'views/ApiView'
// import BingoView from 'views/BingoView'
// import TableroView from 'views/TableroView'
// import DominoView from 'views/DominoView'
// import NotFoundView from 'views/NotFoundView/NotFoundView'
// import Header from 'layouts/Header'
import Master from 'layouts/master'
import { UserAuthWrapper } from 'redux-auth-wrapper'
// import auth from 'components/auth'

/* function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
*/

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})
const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAdmin',
  predicate: user => user.isAdmin
})

const UserIsTranslator = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsTranslator',
  predicate: user => (user.isTranslator || user.isAdmin)
})

export default store => (
  <Route path='/' component={Master}>
    <IndexRoute component={HomeView}/>
    <Route path='home' component={HomeView} />
    <Route path='saac' component={HomeView} />
    <Route path='premios' component={HomeView} />
    <Route path='descargas' component={HomeView} />
    <Route path='condiciones-de-uso' component={HomeView} />
    <Redirect from='pictograms' to='/pictograms/search' />
    <Route path='pictograms'>
      <Route path='search' component={SearchPictogramsView}>
        <Route path='/pictograms/search/:searchText' component={ShowPictogramsView} />
        <Route path='/pictograms/id/:id' component={PictogramView} />
      </Route>
      <Route path='api' component={HomeView} />
      <Route path='catalogs' component={HomeView} />
    </Route>
    <Route path='materials' component={HomeView} />

    <Redirect from='onlinetools' to='/onlinetools/bingos-creator' />
    <Route path='onlinetools'>
      <Route path='animations-maker' component={HomeView} />
      <Route path='symbols-creator' component={HomeView} />
      <Route path='schedule-generator' component={HomeView} />
      <Route path='calendar-generator' component={HomeView} />
      <Route path='bingos-creator' component={BingoView} />
      <Route path='snakes-and-ladders' component={HomeView} />
      <Route path='dominos' component={HomeView} />
      <Route path='dominos-encadenados' component={HomeView} />
    </Route>
    // User Routes
    <Route path='signin' component={SigninView} />
    <Route path='register' component={RegisterView} />
    <Route path='configuration' component={AppConfView} />
    <Route path='profile' component={UserIsAuthenticated(HomeView)}  />
    <Route path='usermaterial' component={UserIsAuthenticated(HomeView)}  />
    <Route path='upload' component={UserIsAdmin(HomeView)} />
    <Route path='translate' component={UserIsTranslator(PictogramsGridView)} />
    <Route path='signout' component={SignoutView} />
  </Route>
)
