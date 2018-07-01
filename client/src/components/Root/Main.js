import React, { Component, Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Table from '../Table/Table'

class Main extends Component {
  render () {
    // dummy value changing user state from logged in to not logged in
    const loggedIn = true
    return loggedIn ? 
    <Fragment>
      <Route
        path="/"
        component={ Header}
      />
      <Switch>
        <Route
          path="/"
          component= { Table }
        />
        <Route
          path="/something"
          component={ () => <div>Something</div> }
        />
      </Switch>
      <Route
        path="/"
        component={ Footer }
      />
    </Fragment> 
    :
    <Redirect from="/" to="/signin" />
  }
}

export default Main