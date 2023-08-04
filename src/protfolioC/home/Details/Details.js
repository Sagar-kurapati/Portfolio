import React from 'react';
import "./Details.css";

export default function Details() {
  return (
   <div className="details">
    <h1>My details</h1>
    <div className="all">
    {/* <section className='blank'>
    <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
              <a href='#'>

                <i className='fa fa-twitter'></i>
              </a>

    </section>
    <section className='blank1'>
        <h4>Education</h4>
        <h4>Projects</h4>
        <h4>Skills</h4>
        <h4>Intrests</h4>
    </section> */}
    <section className='blank2'>
      <h2>  • Education</h2>
       <h3>*  Bachelor of Science Information Technology </h3>    
      <h4><b>Lala Lajpatrai College of Commerce And Economics</b></h4>
      <h4> Mumbai University</h4><br/>
      <button className='btn highlighted-btn'>
                2020-23
              </button> 
    
       <br/><br/>

       <h3>*  HSC In Science  </h3>    
      <h4><b>The Andhra Education Society Junior College</b></h4>
      <h4> Successfully scored 64%</h4>
       <h4>Maharashtra  State Board</h4><br/>
       <button className='btn highlighted-btn'>
                2019-20
              </button>
       <br/><br/>

       <h3>*  SSC </h3>    
      <h4><b>The Andhra Education Society High School</b></h4>
      <h4> Successfully scored 76%</h4>
       <h4>Maharashtra State Board</h4><br/>
       <button className='btn highlighted-btn'>
                2017-18
              </button>
    </section>
    </div>
   </div>
  );
}
