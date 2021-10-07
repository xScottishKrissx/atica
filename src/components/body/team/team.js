import * as React from 'react'

// import './your.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Team = (props) =>{
    
return(
    <div>
        <Row className="textArea up" >
          <Col md="12" >
            <span>text area 5</span>
            <h2>Meet the team</h2>
            
            <button>Call To Action</button>
          </Col>
        </Row>
    </div>
)

}

export default Team;