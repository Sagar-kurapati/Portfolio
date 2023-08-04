import React from 'react';
import "./Aboutme.css";
import image from '../../assets/Home/sample.jpg';

export default function Aboutme() {
  return (
  <div className="aboutme">
    <h1>About Me</h1>
    <div className="content">
    <section className='box'>
        <img src={image} alt='123' style={{Height:"350px",width:"300px"}} />
    </section>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Reiciendis voluptas consequatur officiis incidunt, ullam at distinctio
        autem nobis iusto asperiores aliquam quasi ea fuga aspernatur, accusantium possimus illo eligendi facilis.
    
    </div>
  </div>
  );
}
