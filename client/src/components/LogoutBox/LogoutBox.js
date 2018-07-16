import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './LogoutBox.scss'

const LogoutBox = () => (
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
      <div class="col-md-4 col-sm-4 col-xs-12">

        <form>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
            <label className="form-check-label" htmlFor="dropdownCheck2">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
          <div>
          Already have an account? <Link to="/signin">Sign in</Link></div>
        </form>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
    </div>
  </div>
)

export default LogoutBox