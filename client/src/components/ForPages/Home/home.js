import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Home = () => (
      <div className="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">
              <Link   style={{textDecoration: "none"}}className="homeLinks" to='/audition'>
                <h1 className="mainCard">
                  Audition!
                </h1>
              </Link>
            </div>
          </div>
          <div className="card2" >
            <div className="cardTitle">
              <Link   style={{textDecoration: "none"}}className="homeLinks" to='/login'>
                <h1>Login</h1>
              </Link>
            </div>
          </div>
          <div className="card3" >
            <div className="cardTitle">
              <Link  style={{textDecoration: "none"}} className="homeLinks" to='/about'>
                <h1>About</h1>
              </Link>
            </div>
          </div>
          <div className="card4" >
            <div className="cardTitle">
              <Link   style={{textDecoration: "none"}}className="homeLinks" to='/contact'>
                <h1>Contact</h1>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
)

export default Home