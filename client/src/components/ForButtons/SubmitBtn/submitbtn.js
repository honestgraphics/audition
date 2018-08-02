
import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import propTypes from 'prop-types'
// import axios from "axios";


// create stateful component for modal play button
class SubmitBtn extends Component {
//  constructor(props) {
//    super(props);

//    this.state = {
//      playSong: null
//    }
//  }
  render() {
    // let {auditionSongLink} = this.props

   return (
    <Fragment>
      <button type="button" className="btn btn-primary submitBtn">Submit</button>
    </Fragment>
    )
  }
}

  export default SubmitBtn;