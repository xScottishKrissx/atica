import * as React from 'react'

import './footer.sass'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import header from '../../images/butterfly.png'

export const Footer = (props) =>{
    

return(
    <Container className="footerWrapper" fluid>
        <Row className="innerFooterWrapper">
            <Col sm={12} lg={6}>
                <img src={header} alt="" />
            </Col>
            
            <Col sm={12} lg={6}>
                <span>ATTICA</span>
                <ul>
                    <li>Glasgow</li>
                    <li>Ayr</li>
                    <li>Edinburgh</li>
                </ul>

                {/* <ul>
                    <li>twiiter @attica</li>
                    <li>Insta - @attica</li>
                    <li>Email - furniture@attica.com</li>
                </ul> */}


            </Col>
        </Row>
    </Container>
)

}

export default Footer;