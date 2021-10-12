import * as React from 'react'

import './materials.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Materials = (props) =>{
    
return(
    <div className="materialsWrapper up" >
        {/* Text 1 */}
        <div className="navBarAnchor" id="materialsAnchor"></div>
       
        <Row className="textArea left" id="materials">
          <Col md="12" >
            <h2>Our Materials</h2>
            <p>Dedicated to eco-friendly, renewable sources.</p>
          </Col>
        </Row>

{/* Card Section 2 */}    
        <Row className="card" >
          <Col md="12" >

          <div className="innerCardWrap">
              <span id="card-5"></span>
              <div>
                <h3>Wood</h3>
                <p>From Pine to Mahogany, we've got wood</p>
              </div>
            </div>

          </Col>
        </Row>

        <Row md="8" className="card dual">
          <Col md={6}>
          <div className="innerCardWrap">
              <span id="card-6"></span>
              <div>
                <h3>Plastics</h3>
                <p>We're proud of our efforts to turn plastic waste into usable products</p>
              </div>
            </div>
          </Col>

          <Col md={6}>            
          <div className="innerCardWrap">
            <span id="card-7"></span>
            <div>
              <h3>Hemp</h3>
              <p>You'd be amazed what you can produce with hemp</p>
            </div>
          </div>
          </Col>

        </Row>

        <Row className="card">
            <Col md="12" >
            <div className="innerCardWrap">
              <span id="card-8"></span>
              <div>
                <h3>Grown</h3>
                <p>Attica offers a range of limited, tree grown furniture</p>
              </div>
            </div>
          </Col>
        </Row>
        
    </div>
)

}

export default Materials;