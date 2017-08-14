import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router';

import './App.css';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

// import MainNavbar from './Components/Mainnav.js';
import Body from './Components/Main.js';
import Foot from './Components/Footer.js'

class App extends Component {
  render() {
    return (
      
      <div className="App main-body">
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

        <Body></Body>

        <Foot></Foot>
      </div>
    );
  }
}

export default App;
