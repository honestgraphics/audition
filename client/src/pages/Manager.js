import React, {
  // Component, 
  Fragment 
} from 'react'

import Header from '../components/Header/Header'
// import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'


class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <Fragment>
        {/* <h1>MANAGER PAGE</h1> */}
        <Header />
        {/* <Table /> */}
        <Footer />
    </Fragment>
    );
  }
}

export default Manager;