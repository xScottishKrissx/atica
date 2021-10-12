import * as React from 'react'

import './header.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import header from '../../../images/butterfly.png'

export const Header = (props) =>{
return(
    <Container fluid className="header" id="top">
    <div className="navBarAnchor" id="topAnchor"></div>
      <Row className="text">
        <Col>
          <img alt="" src={header}></img>
          
          <div>
            <h1>ATICA</h1>
            <p>{props.description}</p>
          </div>

        </Col>
      </Row>
    </Container>
)

}

export default Header;