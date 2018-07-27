import React, { Redirect, Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  Router,
  Route,
  // BrowserRouter
  // Switch
} from 'react-router-dom'
import LoginBox from './components/LoginBox/LoginBox'
import { LogoutBox } from './components/LogoutBox'
import Login from './pages/Login.js'
import history from './components/Routes/history'
import Audition from './pages/Audition.js'
import Home from './pages/Home.js'
import Manager from './pages/Manager.js'
import Database from './pages/Database.js'
import Logout from './pages/Logout';
import SignUpBox from './components/SignUpBox/SignUpBox';


class App extends Component {
  render () {
    
    const loggedIn = true
    if (loggedIn) {
      return (
        <Router history={history}>
          <Fragment>
            <Route
              exact
              path="/"
              component={ Home }
            />
            <Route
              exact
              path="/login"
              component={ Login }
            />
            <Route
              exact
              path="/logout"
              component={ Logout }
            />
             <Route
              exact
              path="/signup"
              component={ SignUpBox}
            />
            <Route
              exact
              path="/audition"
              component={ Audition }
            />
            <Route
              exact
              path="/manager"
              component={ Manager }
            />
            <Route
              exact
              path="/database"
              component={ Database }
            />
          </Fragment> 
        </Router>
      )
    } else {
      return (
        <Router history={history}>
          <Redirect from="/" to="/signin" />
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
        </Router>
      )
    }
  }
}

export default App