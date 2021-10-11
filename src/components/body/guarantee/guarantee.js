import * as React from 'react'

import './guarantee.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Guarantee = (props) =>{
    
return(
    <div className="guaranteeWrapper" >
        {/* Text Section 4 */}
        <Row className="textArea left" id="guarantee" >
          <Col md="12" >
            <h2>Atica Guarantee</h2>
          </Col>
        </Row>

{/* Card Section 4 */}
        <Row md="8" className="card dual left" >
          <Col md={6}>
            <div className="innerCardWrap">
              <span id="card-12"></span>
              <div>
                <h3>Vegan</h3>
                <p>All of our products are 100% vegan</p>
              </div>
            </div>
          </Col>

          <Col md={6}>            
          <div className="innerCardWrap">
              <span id="card-13"></span>

              <div>
                <h3>Environmentally Responsible</h3>
                <p>We're a carbon neutral company, meaning our entire product chain from manufacture to sales, is friendly to the environment</p>
              </div>
            </div>
          </Col>

        </Row>
    </div>
)

}

export default Guarantee;