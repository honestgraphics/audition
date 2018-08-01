import React from 'react';





class About extends React.Component {
  render() {
    return (
      <div className="wrapper">
      <div className="jumbotron jumbotron-fluid">
      <div className="container aboutBox">
        <h2 className="display-4">ABOUT US</h2>
        <h3>Audition was generted for a radio station that had 
        a need for automated system
        that solves the a number of issues the station was facing, like : </h3>
        <ul>
          <li><h3>Security</h3></li>
          <li><h3>Storage</h3></li>
          <li><h3>Validation</h3></li>
          <li><h3>Copy rights protection</h3></li>
          <li><h3>Approval & tarcking System</h3></li>
          <li><h3>More ...</h3></li>
        </ul>
      </div>
    </div>  
    </div>
    );
  }
}

export default About;