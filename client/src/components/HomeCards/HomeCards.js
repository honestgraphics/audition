import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './HomeCards.scss'


const HomeCards = () => (
      <div className="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">
              <Link to="/"><h1>Home Page</h1></Link>
            </div>

          </div>
          <div className="card2" >
            <div className="cardTitle">
              <Link to="/Audition"><h1>Audition Page</h1></Link>
            </div>
          </div>
          <div className="card3" >
            <div className="cardTitle">
              <Link to="/Manager"><h1>Manager Page</h1></Link>
            </div>
          </div>
          <div className="card4" >
            <div className="cardTitle">
              <Link to="/Database"><h1>Database</h1></Link>
            </div>
          </div>
        {/* </div> */}
      </div>
)

export default HomeCards