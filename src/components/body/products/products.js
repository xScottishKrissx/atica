import * as React from 'react'

import './products.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Products = (props) =>{
    
return(
    <div className="productsWrapper"  >

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
                <h3>Vegan</h3>
                <p>All of our products are 100% vegan</p>
              </div>
            </div>

          </Col>
        </Row>

        <Row md="8" className="card dual right">

            <Col md={6}>
            <div className="innerCardWrap">
                <span id="card-2"></span>
                <div>
                  <h3>Vegan</h3>
                  <p>All of our products are 100% vegan</p>
                </div>
              </div>
            </Col>

            <Col md={6}>            
            <div className="innerCardWrap">
              <span id="card-3"></span>
              <div>
                <h3>Vegan</h3>
                <p>All of our products are 100% vegan</p>
              </div>
            </div>
            </Col>

        </Row>

        <Row className="card right">
            <Col md="12" >
            <div className="innerCardWrap">
              <span id="card-4"></span>
              <div>
                <h3>Vegan</h3>
                <p>All of our products are 100% vegan</p>
              </div>
            </div>
          </Col>
        </Row> 
    </div>
)

}

export default Products;