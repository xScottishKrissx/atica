import * as React from 'react'

// import './your.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Subscription = (props) =>{
    
return(
    <div className="subscriptionWrapper">
        <Row md="8" className="card dual up">
          <Col md={3}>
            <span id="card-14"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-15"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-16"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-17"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

        </Row>

        <Row className="textArea up" id="subscription">
          <Col md="12" >
            <span>Footer Text</span>
            <h2>Furniture Subscription</h2>
            <button>Call To Action</button>
          </Col>
        </Row>
    </div>
)

}

export default Subscription;