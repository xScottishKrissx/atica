import * as React from "react"
import {useEffect } from "react";

import { graphql } from "gatsby";

import './index.sass';

import CustomNavbar from "../components/navbar/customNavbar";
import Header from "../components/body/header/header";
import Body from "../components/body/body,";
import Footer from "../components/footer/footer";

const IndexPage = ({data}) => {

const siteInfo = data.site.siteMetadata.description

useEffect(()=>{

    // console.log("Hook")
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
  
          
          if(targetId.includes("products")){
            // document.getElementById("navBarMaterialsLink").classList.remove('navChangeTemp') 
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
            document.getElementById("navBarLocationsLink").classList.remove('navChangeTemp')
            document.getElementById("navBarGuaranteeLink").classList.add('navChangeTemp')
            document.getElementById("navBarTeamLink").classList.remove('navChangeTemp')
          }

          if(targetId.includes("team")){
            document.getElementById("navBarGuaranteeLink").classList.remove('navChangeTemp')
            document.getElementById("navBarTeamLink").classList.add('navChangeTemp')
            document.getElementById("navBarSubscriptionLink").classList.remove('navChangeTemp')
          }
          
          if(targetId.includes("subscription")){
            document.getElementById("navBarTeamLink").classList.remove('navChangeTemp')
            document.getElementById("navBarSubscriptionLink").classList.add('navChangeTemp')
          }

        } else {

        }
      });
  
    }
    
  
    let options = { threshold: [0.1] }
    let observer = new IntersectionObserver(intersectionCallback, options)

    // let elements = document.querySelectorAll('.row ')
    let elements = document.querySelectorAll('div')
  
    for (let elm of elements){
      observer.observe(elm)
    }
    return () => window.removeEventListener("scroll", handleScroll);
}, [])

  return (
    <>
      <CustomNavbar home={true}/>
      <Header description={siteInfo} />
      <Body />
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
    query HomePageQuery {
      site {
        siteMetadata {
          description
        }
      }
      allMdx {
          nodes {
              frontmatter {
                  title,
                  description,
                  category,
              },
              id,
              body
          }
      }
    }
  `
