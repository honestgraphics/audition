import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// import homecard from '../../assets/images/homecard.png';


import './homeboxes.scss'

const HomeBoxes = () => (




      <body>
        <!--[if lt IE 10]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="studio-container">
        <!-- Outer container for entire page -->
        <div class="studio-outer-box">
        <section class="scrollpoint sp-effect-fadein active animated fadeIn" id="title">
        <div class="studio-box title-box">
        <div class="helper-text">
        this is
        </div>
        <div class="studio-title">
        snark studios
        </div>
        <div class="helper-text">
        sassy web design + front-end development
        </div>
        <div id="meet-sara">
        <a href="http://saradoes.com" alt="visit my personal site">
        meet sara
        </a>
        </div>
        </div>
        </section>
        <section class="scrollpoint sp-effect-faderight active animated fadeInRight" id="hire">
        <div class="studio-box hire-box">
        <div class="studio-title">
        <a href="workwithme.html">
        Work with me
        </a>
        </div>
        </div>
        </section>
        <!-- SECOND ROW -->
        <section class="scrollpoint sp-effect-fadeleft active animated fadeInLeft" id="blog">
        <div class="studio-box blog-box">
        <div class="studio-title">
        <a href="http://getserious.snarkstudios.com">
        get serious
        </a>
        </div>
        <div class="helper-text">
        a thoughtful column about independence for people who like sarcasm
        </div>
        <!-- <div id="gs-link">

        <a href="http://bit.ly/GetsoSerious" alt="Sign up for updates about Get Serious" target="_blank">
        sign up for launch deets
        </a>
        </div>
         -->
         </div>
         </section>
         <section class="scrollpoint sp-effect-faderight active animated fadeInRight" id="work">
         <div class="studio-box work-box">
         <div class="studio-title">
         <a href="projects.html">
         recent projects
         </a>
         </div>
         </div>
         </section>
         </div>
         <!-- End of the main page container -->
         <!-- 
         <div class="studio-footer">

            <a href="http://thesnarkshop.com">
            send more mail
            </a>
             | 
             <a href="http://instagram.com/vtsara">
             instagram
             </a>
              | 
              <a href="http://twitter.com/vtsara">
              twitter
              </a>
               | 
               <a href="http://pinterest.com/saradoes">
               if you're bored
               </a>
                | 
                <a href="http://facebook.com/saradoes.blog">
                if you're SUPER bored 
                </a>
                 | 
                 <a href="workwithme.html">contact</a>
                  | copyright 2016 sara elizabeth works llc
          </div> --></div><!-- Google Analytics: change UA-XXXXX-X to be your site's ID. --><script>(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='https://www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','UA-XXXXX-X');ga('send','pageview');</script><script src="scripts/vendor.js"></script><script src="scripts/plugins.js"></script><script src="scripts/main.js"></script></body>
























      // <div class="homeBoxes">
      //   <div className="cards">
      //     <div className="card" style={{width: '18rem'}}>
      //       <Link to="/"><img className="card-img-top homecard" src={homecard} alt="Home Card" /></Link>
      //     </div>
      //     <div className="card" style={{width: '18rem'}}>
      //       <Link to="/Audition"><img className="card-img-top auditioncard" src={auditioncard} alt="Audition Card" /></Link>
      //     </div>
      //     <div className="card" style={{width: '18rem'}}>
      //       <Link to="/Manager"><img className="card-img-top managerapprovalcard" src={managerapprovalcard} alt="Manager Approval Card" /></Link>
      //     </div>
      //     <div className="card" style={{width: '18rem'}}>
      //       <Link to="/Database"><img className="card-img-top databasecard" src={databasecard} alt="Database Card" /></Link>
      //     </div>
      //   </div>
      // </div>
)

export default HomeBoxes