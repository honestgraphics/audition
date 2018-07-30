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
import Login from './pages/login';
import Logout from './pages/logout';
import Audition from './pages/audition.js';
import Home from './pages/home.js';
import Manager from './pages/manager.js';
import Database from './pages/database.js';
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
            <PrivateRoute
              exact
              path="/audition"
              component={ Audition }
            />
            <PrivateRoute
              exact
              path="/manager"
              component={ Manager }
            />
            <PrivateRoute
              exact
              path="/database"
              component={ Database }
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