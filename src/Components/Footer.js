import React, { Component } from 'react';
import '../App.css';
import './Mainnav.css'
import {
	Nav,
	Navbar,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
    	<div>
		    <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Nav>
			        <NavItem href="https://www.linkedin.com/in/stefan-piatkov-865a4978/">LinkedIn</NavItem>
			        <NavItem href="https://au.pinterest.com/stefanpiatkov/">Pinterest</NavItem>
			        <NavItem href="https://teamtreehouse.com/stefanpiatkov">My Treehouse</NavItem>
			        <NavItem href="https://github.com/AR8Stefan">GitHub</NavItem>
			        <NavItem>&copy; </NavItem>
			      </Nav>
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>

			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			</div>
    );
  }
}

export default Footer;