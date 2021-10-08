import * as React from 'react'

import './subscription.sass'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Subscription = (props) =>{
    
return(
    <div className="subscriptionWrapper">
          <Row className="textArea up" id="subscription">
          <Col md="12" >
            <h2>ATICA+</h2>
          </Col>
        </Row>

        <Row md="8" className="card dual up">
          
          <Col md={6} lg={3}>
            <div id="aticaBronze">
              <h3>Atica Bronze</h3>
              <span>Features</span>
              <ul>
                <li>1x random sofa</li>
                <li>1x random armchair</li>
                <li>1x random ottoman</li>
                <li>2x random shelves</li>
              </ul>
              <h4>£99.99 <span>per month</span></h4>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div id="aticaSilver">
              <h3>Atica Silver</h3> 
              <span>Features</span>
              <ul>
                <li>1x random bookcase</li>
                <li>1x random table</li>
                <li>2x Pouffes</li>
                <li>+ Bronze Tier Rewards</li>
              </ul>
              <h4>£199.99 <span>per month</span></h4>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div id="aticaGold">
              <h3>Atica Gold</h3> 
              <span>Features</span>
              <ul>
                <li>2x random chairs</li>
                <li>1x random size bed</li>
                <li>+ Bronze Tier Rewards</li>
                <li>+ Silver Tier Rewards</li>
              </ul>
              <h4>£299.99 <span>per month</span></h4>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div id="aticaPlatinum">
              <h3>Atica Platinum</h3> 
              <span>Features</span>
              <ul>
                <li>24/7 Customer Support</li>
                <li>Personal interior designer</li>
                <li>Cake</li>
                <li>+ All other tier rewards</li>
              </ul>
              <h4>£399.99 <span>per month</span></h4>

            </div>
          </Col>

        </Row>
          <Row className="textArea up" id="subscription">
          <Col md="12" >
            <p>Do you have more money than sense? Do you live in a castle? </p>
            <p>ATICA+ is the deal for you.</p>
            <p>Regardless of whether you need all of this, we'll send you a mountain of furniture every month, chosen from our entire product inventory, because why not. Life is short and you might get something rare and valuable.</p>
            <p>Probably not, but you might.</p>
            <button>Call To Action</button>
          </Col>
        </Row>

    </div>
)

}

export default Subscription;