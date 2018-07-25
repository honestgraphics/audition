import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
import './HomeCards.scss'
// import pic1 from '../../assets/images/unsplash1.jpg';
// import pic2 from '../../assets/images/unsplash2.jpg';
// import pic3 from '../../assets/images/unsplash3.jpg';
// import pic5 from '../../assets/images/unsplash5.jpg';

// import {Fade} from 'react-slideshow-image';

// const images = [
//   pic1, pic2, pic5, pic3
// ]

const HomeCards = () => (
      <div className="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">
              <h1>Audition!</h1>
            </div>
          </div>
          <div className="card2" >
            <div className="cardTitle">
              <h1>Login</h1>
            </div>
          </div>
          <div className="card3" >
            <div className="cardTitle">
              <h1>About</h1>
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