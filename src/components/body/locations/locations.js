import * as React from 'react'

import './locations.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Locations = (props) =>{
    
return(
<div className="locationsWrapper" id="locations">
          <Row className="textArea right" >
          <Col md="12" >
            <h2>Our Locations</h2>
            <p>Glasgow - Ayr - Edinburgh </p>
          </Col>
        </Row>

{/* Card Section 3 */}
        <Row className="custom-card">
          <div className="single-row col-md-6" >
              <div >
                <span className="testCard" id="card-11"></span>
                <div className="customCardCaption">
                  <h3>Glasgow</h3>
                </div>
              </div>
          </div>

          <div className="dual-row col-md-6">

              <div className="row higher ">
                  <div className="col-md-12">
                      <div>
                        <span className="testCard" id="card-10"></span>
                        <div className="customCardCaption">
                          <h3>Ayr</h3>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="row lower ">
                  <div className="col-md-12">
                      <div>
                        <span className="testCard" id="card-9"></span>
                        <div className="customCardCaption">
                          <h3>Edinburgh</h3>
                        </div>
                      </div>
                  </div>
              </div>

          </div>
        </Row>
</div>
)

}

export default Locations;