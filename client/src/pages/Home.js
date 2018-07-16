import React, { Component, Fragment } from 'react'

import HomeCards from '../components/HomeCards/HomeCards'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <Fragment>
        <h1>HOME PAGE</h1>
        <HomeCards />
      </Fragment>
    );
  }
}

export default Home;
