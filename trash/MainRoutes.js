import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../../pages/Home.js'
import Audition from '../../pages/Audition.js'
import Manager from '../../pages/Manager.js'
import Database from '../../pages/Database.js'

class MainRoutes extends Component {
  render () {
    // dummy value changing user state from logged in to not logged in
    const loggedIn = true
    return loggedIn ?
    <Fragment>
      <Route
        path="/"
        component={ Home }
      />
      <Route
        path="/audition"
        component={ Audition }
      />
      <Route
        path="/manager"
        component={ Manager }
      />
      <Route
        path="/database"
        component={ Database }
      />
    </Fragment> 
    :
    <Redirect from="/" to="/signin" />
  }
}

export default MainRoutes
