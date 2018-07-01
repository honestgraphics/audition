import React from 'react'
import PropTypes from 'prop-types'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import Main from './Main'
import LoginBox from '../LoginBox/LoginBox'
import { LogoutBox } from '../LogoutBox'

/*import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Table from '../Table/Table'*/
import history from './history'


const Root = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path="/"
        component={ Main }
      />
      <Route
        exact
        path="/signin"
        component={ LoginBox }
      />
      <Route
        exact
        path="/signup"
        component={ LogoutBox }
      />
    </Switch>
  </Router>
  /*<div>
    <Header />
    <LoginBox />
    <Table />
    <Footer />
  </div>*/
)

export default Root