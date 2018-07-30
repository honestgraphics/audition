import React, { Redirect, Component, Fragment } from 'react'
import {
  Router,
  Route,
  // BrowserRouter
  // Switch
} from 'react-router-dom';
// imports for passport
import LoginBox from './components/ForPassport/LoginBox/loginbox';
import LogoutBox from './components/ForPassport/LogoutBox/logoutbox';
import SignUpBox from './components/ForPassport/SignUpBox/signupbox';
import history from './components/ForPassport/Routes/history';
//import pages
import Login from './pages/login';
import Logout from './pages/logout';
import Audition from './pages/audition.js';
import Home from './pages/home.js';
import Manager from './pages/manager.js';
import Database from './pages/database.js';


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