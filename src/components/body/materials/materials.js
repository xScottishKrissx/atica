import * as React from 'react'

import './materials.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Materials = (props) =>{
    
return(
    <div className="materialsWrapper">
        {/* Text 1 */}
       
        <Row className="textArea left" id="materials">
          <Col md="12" >
            <span>text area 2</span>
            <h2>Material Examples</h2>
            <p>Wood - Brown Wood - Yellow Wood - Black Wood  </p>
          </Col>
        </Row>

{/* Card Section 2 */}    
        <Row className="card left" >
          <Col md="12" >
            {/* <img src={sofa} alt="" /> */}
            <span id="card-5"></span>
            <div>
              <h3>Card Title</h3>
            </div>

          </Col>
        </Row>

        <Row md="8" className="card dual left">
          <Col md={6}>
            <span id="card-6"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={6}>            
            <span id="card-7"></span>
            <div>
              <h3>Card Title</h3>
            </div></Col>

        </Row>

        <Row className="card left">
            <Col md="12" >
            {/* <img src={sofa} alt="" /> */}
            <span id="card-8"></span>
            <div>
              <h3>Card Title </h3>
            </div>

          </Col>
        </Row>
        
    </div>
)

}

export default Materials;