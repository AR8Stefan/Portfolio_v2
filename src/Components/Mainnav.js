import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router';

import '../App.css';
import './Mainnav.css'
import {
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';

class MainNavbar extends Component {
  render() {
    return (
    	<div>
		    <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">React-Bootstrap</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#">Link</NavItem>
			        <NavItem eventKey={2} href="#">Link</NavItem>

			      </Nav>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="#">Link Right</NavItem>
			        <NavItem eventKey={2} href="#">Link Right</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			</div>
    );
  }
}

export default MainNavbar;