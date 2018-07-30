import React, {
  // Component, 
  Fragment 
} from 'react';
import Home from '../components/ForPages/Home/home';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <Fragment>
        <Home />
      </Fragment>
    );
  }
}

export default HomePage;
