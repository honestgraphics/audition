import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './HomeCards.scss'


const HomeCards = () => (
      <div class="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">
              <Link to="/"><h1>About US</h1></Link>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti asperiores ullam, laboriosam dicta, et facere 
                pariatur itaque tenetur rem excepturi eaque dolorem 
                accusamus consequuntur, commodi magni? Repellendus numquam consectetur corporis.</p>
            </div>

          </div>
          <div className="card2" >
            <div className="cardTitle">
              <Link to="/audition"><h1>Photo Album</h1></Link>
            </div>
          </div>
          <div className="card3" >
            <div className="cardTitle">
              <Link to=""><h1>Photo Album</h1></Link>
            </div>
          </div>
          <div className="card4" >
            <div className="cardTitle">
              <Link to="/login"><h1>Log In</h1></Link>
            </div>
          </div>
        {/* </div> */}
      </div>
)

export default HomeCards