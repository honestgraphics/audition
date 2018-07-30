import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  Router,
  Route,
  Redirect,
  Switch
  // BrowserRouter
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