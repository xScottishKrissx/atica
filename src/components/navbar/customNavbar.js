import * as React from 'react'

import './customNavbar.sass';

// import './your.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import header from '../../images/butterfly.png'

export const CustomNavbar = (props) =>{
    
return(
    <Container fluid className=" navbarWrapper">
      <Navbar fixed="top" collapseOnSelect expand="lg ">
        <Container>
        <Navbar.Brand href="#top">
          <img
            src={header}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="atica website logo"
          />
          ATICA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navBarProductsLink" href="#products">Our Products</Nav.Link>
            <Nav.Link id="navBarMaterialsLink" href="#materials">Our Materials</Nav.Link>
            <Nav.Link id="navBarLocationsLink" href="#locations">Our Locations</Nav.Link>
            <Nav.Link id="navBarGuaranteeLink" href="#guarantee">Our Guarantee</Nav.Link>

          </Nav>
          
          <Nav>
            <Nav.Link id="navBarSubscriptionLink" href="#subscription">ATICA+</Nav.Link>
          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
)

}

export default CustomNavbar;