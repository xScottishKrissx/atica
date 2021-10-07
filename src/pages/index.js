import * as React from "react"
import { useEffect } from "react";
import './index.sass';
// import "bootstrap/dist/css/bootstrap.min.css";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import header from '../images/butterfly.png'

// markup
const IndexPage = () => {


// function mouseHover(id,action){
//   // console.log(id + " : " + action)
//   if(typeof document !== 'undefined'){
//     if(action === "out")  {
//       setTimeout(function(){ 
//       document.getElementById(id).classList.remove('in')
//       document.getElementById(id).classList.add('out')
//       }, 1000);
//       // document.getElementById(id).classList.remove('in')
//       // document.getElementById(id).classList.add('out')
//     }
//     if(action === "in") {
      
//       document.getElementById(id).classList.remove('out')
//       document.getElementById(id).classList.add('in')

//     }
//   }

 
// }


// useEffect(()=>{
//   const isDocument = typeof document !== "undefined"
//   console.log(isDocument)
  
//   if(isDocument){
  
//     function intersectionCallback(entries) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           // isLeaving = true;
  
//           let targetRow = entry.target.className
//           let targetId = entry.target.id
//           console.log(entry.target)
//           if(targetRow.includes("left")){
//             entry.target.classList.add('aniLeft')
//           }
  
//           if(targetRow.includes("right")){
//             entry.target.classList.add('aniRight')
//           }
  
//           if(targetRow.includes("up")){
//             entry.target.classList.add('aniUp')
//           }
  
//           if(targetId.includes("header")){
//             console.log("WOoooooooooooooooooooooooooooooooo")
//             document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')
//           }
//           if(targetId.includes("products")){
//             document.getElementById("navBarMaterialsLink").classList.remove('navChangeTemp') 
//             document.getElementById("navBarProductsLink").classList.add('navChangeTemp')
//           }
          
//           if(targetId.includes("materials")){

//             document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')
//             document.getElementById("navBarMaterialsLink").classList.add('navChangeTemp')
           
//           }

//         } else {

//         }
//       });
  
//     }
    
  
//     let options = { threshold: [0.1] }
//     let observer = new IntersectionObserver(intersectionCallback, options)


//     let elements
//     if(isDocument) elements = document.querySelectorAll('.row ')
  
//     for (let elm of elements){
//       observer.observe(elm)
//     }
  
//   }
// }, [])







  return (

<>
    <Container fluid className=" navbarWrapper">
      <Navbar fixed="top" collapseOnSelect expand="lg ">
        <Container>
        <Navbar.Brand href="#home">
          <img
            src={header}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="atica website logo"
          />
          ATICA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navBarProductsLink" href="#products">Our Products</Nav.Link>
            <Nav.Link id="navBarMaterialsLink" href="#materials">Our Materials</Nav.Link>
            <Nav.Link href="#locations">Our Locations</Nav.Link>
            <Nav.Link href="#guarantee">Our Guarantee</Nav.Link>

          </Nav>
          
          <Nav>
            <Nav.Link href="#subscription">Our Subscription</Nav.Link>
          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    
    <Container fluid className="header" >
      <Row className="text">
        <Col>
          <img alt="" src={header}></img>
          
          <div>
            <h1>ATICA</h1>
            <p>Something profound and over the top copy about furniture, specifically about furniture from us</p>
            {/* <button>Call to action</button> */}
          </div>

        </Col>
      </Row>
    </Container>

    <Container fluid="sm" >
       


{/* Text 1 */}
        <span className="row" id="header"></span>
        <Row className="textArea right " id=" products" >
          <Col md="12" >
            <span>Thinking about the world</span>
            <h2>Product Examples</h2>
            <p>Sofa - Tables - Chairs - Ottomans </p>
          </Col>
        </Row>

{/* Card Section 1 */}
        <Row className="card right" >
          <Col md="12" >
            {/* <img src={sofa} alt="" /> */}
            <span id="card-1"></span>
            <div>
              <h3>Card Title</h3>
            </div>

          </Col>
        </Row>

        <Row md="8" className="card dual right">
          <Col md={6}>
            <span id="card-2"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={6}>            
            <span id="card-3"></span>
            <div>
              <h3>Card Title</h3>
            </div></Col>

        </Row>

        <Row className="card right">
            <Col md="12" >
            {/* <img src={sofa} alt="" /> */}
            <span id="card-4"></span>
            <div>
              <h3>Card Title</h3>
            </div>

          </Col>
        </Row>

{/* Text Section 2 */}
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
{/* Text Section 3 */}
        <Row className="textArea right" id="locations">
          <Col md="12" >
            <span>text area 3</span>
            <h2>Location Examples</h2>
            <p>Glasgow - Ayr - Fort William </p>
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

        {/* <Row md="8" className="card dual right">
          <Col md={6}>
            <span id="card-9"></span>
            <div>
              <h3>Card Title</h3>
              <p>Some copy that goes onto the card</p>
              <button>Link to page</button>
            </div>
          </Col>

          <Col md={6}>            
            <span id="card-10"></span>
            <div>
              <h3>Card Title</h3>
              <p>Some copy that goes onto the card</p>
              <button>Link to page</button>
            </div></Col>

        </Row>

        <Row className="card right">
            <Col md="12" >
            <span id="card-11"></span>
            <div>
              <h3>Card Title 8</h3>
              <p>Some copy that goes onto the card</p>
              <button>Link to page</button>
            </div>

          </Col>
        </Row> */}

{/* Text Section 4 */}
        <Row className="textArea left" id="guarantee">
          <Col md="12" >
            <span>text area 4</span>
            <h2>Atica Guarantee</h2>
            <p>Vegan - Renewable</p>
          </Col>
        </Row>

{/* Card Section 4 */}
        <Row md="8" className="card dual left" >
          <Col md={6}>
            <span id="card-12"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={6}>            
            <span id="card-13"></span>

            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

        </Row>

{/* Text Section 5 */}
        <Row className="textArea up" >
          <Col md="12" >
            <span>text area 5</span>
            <h2>Meet the team</h2>
            
            <button>Call To Action</button>
          </Col>
        </Row>

{/* Footer */}


{/* Footer Cards */}
        <Row md="8" className="card dual up">
          <Col md={3}>
            <span id="card-14"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-15"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-16"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

          <Col md={3}>            
            <span id="card-17"></span>
            <div>
              <h3>Card Title</h3>
            </div>
          </Col>

        </Row>

        <Row className="textArea up" id="subscription">
          <Col md="12" >
            <span>Footer Text</span>
            <h2>Furniture Subscription</h2>
            <button>Call To Action</button>
          </Col>
        </Row>




        {/* <h1>Text Area 1</h1>

        <h1>Card Block 2</h1>
        <h1>Text Area 2</h1>

        <h1>Card Block 3</h1>
        <h1>Text Area 3</h1>

        <h1>Footer Block</h1>
          <h1>Footer Cards</h1>
          <h1>Footer Text</h1> */}
    
      




    </Container>
    </>
  )
}

export default IndexPage
