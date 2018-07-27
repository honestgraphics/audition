import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './HomeCards.scss'
import AboutUsModal from '../AboutUsModal/modal';
import ContactModal from '../ContactModal/modal';





const HomeCards = () => (
      <div className="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">


              <h1 className="mainCard">Audition!</h1>
            </div>
          </div>
          <div className="card2" >
            <div className="cardTitle">

              <h1>Login</h1>

            </div>
          </div>
          <div className="card3" >
            <div className="cardTitle">
              <Link to=""><h1>Photo Album</h1></Link>
            </div>
          </div>
          <div className="card4" >
            <div className="cardTitle">


              <h1>Contact</h1>
            </div>
          </div>
        {/* </div> */}
      </div>
)

export default HomeCards