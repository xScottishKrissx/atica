import * as React from 'react'

import './customNavbar.sass';

// import './your.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import header from '../../images/butterfly.png'

export const CustomNavbar = (props) =>{
    
  function customScrollTo(id){
      let element = document.getElementById(id)
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }

  return(
      <Container fluid className=" navbarWrapper">
        <Navbar fixed="top" collapseOnSelect expand="lg ">
          <Container>
          <Navbar.Brand onClick={()=>customScrollTo("topAnchor")} >
            <img
              src={header}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="atica website logo"
            />
            ATICA
          </Navbar.Brand>

          {props.home === true ? 
            <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={()=>customScrollTo("productsAnchor")} id="navBarProductsLink">Our Products</Nav.Link>
                  <Nav.Link onClick={()=>customScrollTo("materialsAnchor")} id="navBarMaterialsLink">Our Materials</Nav.Link>
                  <Nav.Link onClick={()=>customScrollTo("locationsAnchor")} id="navBarLocationsLink">Our Locations</Nav.Link>
                  <Nav.Link onClick={()=>customScrollTo("guaranteeAnchor")} id="navBarGuaranteeLink">Our Guarantee</Nav.Link>
                  <Nav.Link onClick={()=>customScrollTo("teamAnchor")} id="navBarTeamLink">Our Team</Nav.Link>
      
                </Nav>
                
                <Nav>
                  <Nav.Link onClick={()=>customScrollTo("subscriptionAnchor")} id="navBarSubscriptionLink">ATICA+</Nav.Link>
                </Nav>
      
              </Navbar.Collapse> 
            </>
          : 
            null
          }

          </Container>
        </Navbar>
      </Container>
  )

}

export default CustomNavbar;