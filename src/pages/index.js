import * as React from "react"
import {useState, useEffect, useRef } from "react";
import './index.sass';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CustomNavbar from "../components/navbar/customNavbar";
import Header from "../components/body/header/header";

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

  // const prevScrollY = useRef(0);

useEffect(()=>{


    const handleScroll = () => {
      const currentScrollY = window.scrollY;  
      if(currentScrollY < 200) document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    



    function intersectionCallback(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // isLeaving = true;
  
          let targetRow = entry.target.className
          let targetId = entry.target.id
          // console.log(entry.target)
          if(targetRow.includes("left")){
            entry.target.classList.add('aniLeft')
          }
  
          if(targetRow.includes("right")){
            entry.target.classList.add('aniRight')
          }
  
          if(targetRow.includes("up")){
            entry.target.classList.add('aniUp')
          }
  
          
          if(targetId.includes("header")){
            
            // console.log("WOoooooooooooooooooooooooooooooooo")
            // document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')
          }
          if(targetId.includes("products")){
            document.getElementById("navBarMaterialsLink").classList.remove('navChangeTemp') 
            document.getElementById("navBarProductsLink").classList.add('navChangeTemp') 
            document.getElementById("navBarMaterialsLink").classList.remove('navChangeTemp')
          }
          
          if(targetId.includes("materials")){

            document.getElementById("navBarProductsLink").classList.remove('navChangeTemp')
            document.getElementById("navBarMaterialsLink").classList.add('navChangeTemp')
            document.getElementById("navBarLocationsLink").classList.remove('navChangeTemp')
           
          }
          
          if(targetId.includes("locations")){

            document.getElementById("navBarMaterialsLink").classList.remove('navChangeTemp')
            document.getElementById("navBarLocationsLink").classList.add('navChangeTemp')
            document.getElementById("navBarGuaranteeLink").classList.remove('navChangeTemp')
           
          }
          
          if(targetId.includes("guarantee")){
            console.log("Guarantee")
            document.getElementById("navBarLocationsLink").classList.remove('navChangeTemp')
            document.getElementById("navBarGuaranteeLink").classList.add('navChangeTemp')
            document.getElementById("navBarSubscriptionLink").classList.remove('navChangeTemp')
           
          }
          
          if(targetId.includes("subscription")){

            document.getElementById("navBarGuaranteeLink").classList.remove('navChangeTemp')
            document.getElementById("navBarSubscriptionLink").classList.add('navChangeTemp')
           
          }

        } else {

        }
      });
  
    }
    
  
    let options = { threshold: [0.1] }
    let observer = new IntersectionObserver(intersectionCallback, options)

    let elements = document.querySelectorAll('.row ')
  
    for (let elm of elements){
      observer.observe(elm)
    }
    return () => window.removeEventListener("scroll", handleScroll);
}, [])







  return (

<>
  <CustomNavbar />
  <Header />

    
    <span className="row" id="header"></span>
    <Container fluid="sm" >
       


{/* Text 1 */}
       
        <Row className="textArea right " id="products" >
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
<div className="locationsWrapper">
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
</div>


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

    </Container>
    </>
  )
}

export default IndexPage
