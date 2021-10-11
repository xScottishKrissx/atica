import * as React from 'react'

import './team.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import atticus from '../../../images/team/atticus_pavlis.jpg'
import nicholas from '../../../images/team/nicholas_pavlis.jpg'
import gavin from '../../../images/team/gavin_gray.jpg'
import james from '../../../images/team/james_mccann.jpg'
import silva from '../../../images/team/silva_antonio.jpg'
import liza from '../../../images/team/liza_conway.jpg'

export const Team = (props) =>{
    
return(
    <div className="teamWrapper">
        <Row className="up">
          <Col>
              <Row className="textArea " id="guarantee" >
                <Col md="12" >
                  <h2>Meet the team</h2>
                </Col>
              </Row>
            <Row>

              <Col md={4}>
                <div>
                  <img src={atticus} alt="" />
                  <h3>Atticus Pavlis</h3>
                  <span>CEO</span>
                </div>
              </Col>

              <Col md={4}>
                <div>
                  <img src={nicholas} alt="" />
                  <h3>Nicholas Pavlis</h3>
                  <span>CFO</span>
                </div>
              </Col>

              <Col md={4}>
                <div>
                  <img src={gavin} alt="" />
                  <h3>Gavin Gray</h3>
                  <span>Design</span>
                </div>
              </Col>

         
              
              <Col md={4}>
                <div>
                  <img src={james} alt="" />
                  <h3>James McCann</h3>
                  <span>Sales</span>
                </div>
              </Col>

              <Col md={4}>
                <div>
                  <img src={silva} alt="" />
                  <h3>Silva Antonio</h3>
                  <span>Digital</span>
                </div>
              </Col>

              <Col md={4}>
                <div>
                  <img src={liza} alt="" />
                  <h3>Liza Conway</h3>
                  <span>Marketing</span>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
    </div>
)

}

export default Team;