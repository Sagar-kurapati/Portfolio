import React from 'react';
import "./Project.css"

export default function Projects() {
  return (
   <div className="projects">
    <h1> My Projects</h1>
    <div className="list">
       <h3>* E-COMMERCE WEBSITE FOR CUSTOMIZED GARMENTS </h3>    
      <h4><b>Technology used : Html, Css, Php</b></h4>
      <h4>An ecommerce website designed  customized t-shirts over Internet</h4>
      <h4><button className='btn highlighted-btn'>
                visit
              </button> 
        </h4><br/>

        <h3>* PERSONAL PORTFOLIO WEBSITE </h3>    
        <h4><b>Technology used : React Js</b></h4>
        <h4>A personal portfolio website to showcase my details and projects in one place </h4>
        <h4><button className='btn highlighted-btn'>
                visit
              </button> 
        </h4>
    
       <br/>
    </div>

   </div>
  );
}
