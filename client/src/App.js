// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;



import React, { Redirect, Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import LoginBox from './components/LoginBox/LoginBox'
import { LogoutBox } from './components/LogoutBox'

import history from './components/Routes/history'
import Audition from './pages/Audition.js'
import Home from './pages/Home.js'
import Manager from './pages/Manager.js'
import Database from './pages/Database.js'


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