import * as React from 'react'

import './header.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import header from '../../../images/butterfly.png'

export const Header = (props) =>{
    
return(
    <Container fluid className="header" id="top">
      <Row className="text">
        <Col>
          <img alt="" src={header}></img>
          
          <div>
            <h1>ATICA</h1>
            <p>Something profound and over the top copy about furniture, specifically about furniture from us</p>
            {/* <button>Call to action</button> */}
          </div>

        </Col>
      </Row>
    </Container>
)

}

export default Header;