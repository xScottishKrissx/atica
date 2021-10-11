import * as React from 'react'

import './products.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Products = (props) =>{


// console.log(props.cardInfo)
return(
    <div className="productsWrapper up"  >
      

        <Row className="textArea right" id="products">
          <Col md="12" >
            <span>Thinking about the world</span>
            <h2>Our Products</h2>
            <p>Sofa - Tables - Chairs - Ottomans </p>
          </Col>
        </Row>
            
        <Row className="card right" >
          <Col md="12" >

           
              <div className="innerCardWrap">

                  <span id="card-1"></span>
                  <div>
                    <h3>Sofas</h3>
                  </div>
                </div>
            
          </Col>
        </Row>

        <Row md="8" className="card dual">

            <Col md={6}>
            <div className="innerCardWrap">
                <span id="card-2"></span>
                <div>
                  <h3>Chairs</h3>
                </div>
              </div>
            </Col>

            <Col md={6}>            
            <div className="innerCardWrap">
              <span id="card-3"></span>
              <div>
                <h3>Tables</h3>
              </div>
            </div>
            </Col>

        </Row>

        <Row className="card">
            <Col md="12" >
            <div className="innerCardWrap">
              <span id="card-4"></span>
              <div>
                <h3>Ottomans</h3>
              </div>
            </div>
          </Col>
        </Row> 
    </div>
)

}

export default Products;