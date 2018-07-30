import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  Router,
  Route,
  Redirect,
  Switch
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
import {withCookies, Cookies} from 'react-cookie'

// let isAuthenticated = false
const PrivateRoute = withCookies(({component: Component, cookies: cookies, ...rest}) => {
  // console.log(cookies.get('connect.sid'))
   let isAuthenticated = cookies.get('connect.sid')


  return <Route {...rest} render={ props => (
    isAuthenticated ? (<Component {...props}/>) 
    : (<Redirect to={{
      pathname: '/login',
      state: {from: props.location}
    }}/>)  )
  }/>
})

class App extends Component {
  render () {
    
    const loggedIn = true
    if (loggedIn) {
      return (
        <Router history={history}>
          <Switch>
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
            <PrivateRoute
              exact
              path="/audition"
              component={ AuditionPage }
            />
            <PrivateRoute
              exact
              path="/manager"
              component={ ManagerPage }
            />
            <PrivateRoute
              exact
              path="/database"
              component={ DatabasePage }
            />
          </Switch> 
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