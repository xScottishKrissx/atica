import * as React from "react"
import './index.sass';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import header from '../images/butterfly.png'

// markup
const IndexPage = () => {




  


 

  return (

<>
    <Container fluid className="navbarWrapper">
      <Row>
        <Col>NavBar</Col>
      </Row>
    </Container>


    <Container fluid className="header">
      <Row className="text">
        <Col>
          <img src={header}></img>
          
          <div>
            <h1>Artsy Furniture</h1>
          </div>
          
        </Col>
      </Row>
    </Container>

    <Container fluid="sm">
       






{/* Text 1 */}
        <Row >
          <Col md="12" >Text</Col>
        </Row>
{/* Card Section 1 */}
        <Row>
          <Col md="12">Card 1 - Full</Col>
        </Row>

        <Row md="8">
          <Col xs={6}>Card 1  - Half</Col>
          <Col xs={6}>Card 1 - Half</Col>
        </Row>

        <Row>
          <Col>Card 1 - Full</Col>
        </Row>

{/* Text Section 2 */}
        <Row >
          <Col md="12" >Text</Col>
        </Row>
{/* Card Section 2 */}    
        <Row>
          <Col md="12">Card 2 - Full</Col>
        </Row>

        <Row md="12">
          <Col xs={6}>Card 2 - Half</Col>
          <Col xs={6}>Card 2 - Half</Col>
        </Row>

        <Row>
          <Col md="12">Card 2 - Full</Col>
        </Row>
{/* Text Section 3 */}
        <Row >
          <Col md="12" >Text</Col>
        </Row>

{/* Card Section 3 */}
        <Row md="12">
          <Col xs={6}>Card 2 - Half</Col>
          <Col xs={6}>Card 2 - Half</Col>
        </Row>

        <Row>
          <Col md="12">Card 2 - Full</Col>
        </Row>

{/* Text Section 4 */}
        <Row >
          <Col md="12" >Text</Col>
        </Row>

{/* Card Section 4 */}
        <Row md="12">
          <Col xs={6}>Card 2 - Half</Col>
          <Col xs={6}>Card 2 - Half</Col>
        </Row>

{/* Text Section 5 */}
        <Row >
          <Col md="12" >Text</Col>
        </Row>

{/* Footer */}


{/* Footer Cards */}
        <Row md="12">
          <Col xs={3}>Card 2 - Half</Col>
          <Col xs={3}>Card 2 - Half</Col>
          <Col xs={3}>Card 2 - Half</Col>
          <Col xs={3}>Card 2 - Half</Col>
        </Row>

        <Row >
          <Col md="12" >Footer</Col>
        </Row>




        {/* <h1>Text Area 1</h1>

        <h1>Card Block 2</h1>
        <h1>Text Area 2</h1>

        <h1>Card Block 3</h1>
        <h1>Text Area 3</h1>

        <h1>Footer Block</h1>
          <h1>Footer Cards</h1>
          <h1>Footer Text</h1> */}
    
      




    </Container>
    </>
  )
}

export default IndexPage
