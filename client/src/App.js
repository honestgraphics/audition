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
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import AuditionPage from './pages/audition.js';
import HomePage from './pages/home.js';
import ManagerPage from './pages/manager.js';
import DatabasePage from './pages/database.js';


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
              component={ HomePage }
            />
            <Route
              exact
              path="/login"
              component={ LoginPage }
            />
            <Route
              exact
              path="/logout"
              component={ LogoutPage }
            />
             <Route
              exact
              path="/signup"
              component={ SignUpBox}
            />
            <Route
              exact
              path="/audition"
              component={ AuditionPage }
            />
            <Route
              exact
              path="/manager"
              component={ ManagerPage }
            />
            <Route
              exact
              path="/database"
              component={ DatabasePage }
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