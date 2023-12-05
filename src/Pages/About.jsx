// ... (your existing imports)

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking, faFish, faCoffee, faPlane } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from '../images/jason_dressedup_profile_120223.png';


const About = () => {
  return (
    <div className="col">
      <div className="row">
        <div className='col-6'>
        <a href=""><img src={portfolioImage} className="about-image" alt="Portfolio Picture" width="300" height="auto" /></a>
        </div>
        <div className="col-6 about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            Welcome to my portfolio! I'm passionate about web development and enjoy creating
            meaningful and interactive experiences for users.
          </p>
          <p>
            With a strong foundation in JavaScript, React, and other modern web technologies,
            I strive to build elegant and efficient solutions to real-world problems.
          </p>
          <p>
            Feel free to explore my projects and get in touch if you have any questions or
            collaboration opportunities.
          </p>
          <br />
          <p>
            My favorite activities outside of work or school are: hiking{' '}
            <FontAwesomeIcon icon={faHiking} />, fishing{' '}
            <FontAwesomeIcon icon={faFish} />, friends with coffee{' '}
            <FontAwesomeIcon icon={faCoffee} />, and traveling with my family{' '}
            <FontAwesomeIcon icon={faPlane} />.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
