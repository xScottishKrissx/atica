import * as React from 'react'

import './body.sass'

import Container from 'react-bootstrap/Container'
import Materials from './materials/materials';
import Products from './products/products';
import Locations from './locations/locations';
import Guarantee from './guarantee/guarantee';
import Team from './team/team'
import Subscription from './subscription/subscription';

export const Body = (props) =>{
    
return(
    <Container fluid="sm" id="bodyContainer">
        <Products />
        <Materials />
        <Locations />
        <Guarantee />
        <Team />
        <Subscription />
    </Container>
)

}

export default Body;