import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
// import CoreLayout from 'layouts/CoreLayout/CoreLayout'
// import HomeView from 'views/HomeView/HomeView'
import HomeView from 'views/HomeView2/HomeView'
// import SearchView from 'views/SearchView'
// import ApiView from 'views/ApiView'
// import BingoView from 'views/BingoView'
// import TableroView from 'views/TableroView'
// import DominoView from 'views/DominoView'
// import NotFoundView from 'views/NotFoundView/NotFoundView'
// import Header from 'layouts/Header'
import Master from 'components/master'

export default (
  <Route path='/' component={Master}>
    <Route path='home' component={HomeView} />
    <Redirect from='pictogramas' to='/pictogramas/buscar' />
    <Route path='pictogramas'>
        <Route path='buscar' component={HomeView} />
        <Route path='api' component={HomeView} />
    </Route>
    <Redirect from='programas' to='/programas/bingo' />
    <Route path='programas'>
      <Route path='bingo' component={HomeView} />
      <Route path='tablero' component={HomeView} />
      <Route path='domino' component={HomeView} />
      <Route path='domino-encadenados' component={HomeView} />
    </Route>
    <IndexRoute component={HomeView}/>
    </Route>
)
