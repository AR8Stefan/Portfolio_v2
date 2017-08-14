import React, { Component } from 'react';
import {
	Router,
	Route,
	Switch
} from 'react-router';

import '../App.css';
import './Mainnav.css';
import {
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';

class Body extends Component {
  render() {
    return (
      <div className="main-body container container-fluid">
        <div>{/* Heading Text */}
          <h1>"Hiya. I'm Stefan, an aspiring Front-End Dev. I have a passion for creating things."</h1>
        </div>

        <div>{/* Projects */}
          
        </div>

        <div>{/* About */}
          <h2>A Little About Myself ~</h2>
          <p>I am currently a student at Coder Factory Academy in Sydney, Australia. I really enjoy web-development, and the challenges that come with it. When I'm not coding I like to watch movies, go for a walk, play video games and more.</p>

          <p>When I have finished studying at CFA I'd like to become a Full-Stack Front-End Web Developer.</p>
        </div>

        <div>{/* Contact */}
          <a> LinkedIn | Pinterest | My Treehouse | GitHub </a>
        </div>{/* Next Div Ends Container */}
      </div> 
    );
  }
}

export default Body;