import * as React from 'react'

import './guarantee.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Guarantee = (props) =>{
    
return(
    <div className="guaranteeWrapper">
        {/* Text Section 4 */}
        <Row className="textArea left" id="guarantee">
          <Col md="12" >
            <span>text area 4</span>
            <h2>Atica Guarantee</h2>
            <p>Vegan - Renewable</p>
          </Col>
        </Row>

{/* Card Section 4 */}
        <Row md="8" className="card dual left" >
          <Col md={6}>
            <span id="card-12"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={6}>            
            <span id="card-13"></span>

            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

        </Row>
    </div>
)

}

export default Guarantee;