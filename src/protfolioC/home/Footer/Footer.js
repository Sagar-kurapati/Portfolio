import React from 'react';
import "./Footer.css";
import image from "../../../assets/Home/sample.jpg";

export default function Footer() {
  return (
    <div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col1">
                <h3>Handcrafted by @Sagarkurapati</h3>
                <p>Made with React js</p>
                
            </div>
            <div class="footer-col2">
            <img src={image} alt="123" style={{height:"100px", width:"100px"}} />
                <p>Living, learning, & leveling up one day at a time.</p>
            </div>
            <div class="footer-col3">
                 
                <ul><li><h3>Follow Me</h3></li>
                    <li>FaceBook</li>  <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
                    <li>Instragram</li><a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
                    <li>twitter</li> <a href='#'>
                <i className='fa fa-twitter'></i>
              </a>
                </ul>
                </div>

        </div>
    </div>
</div>
  );
}
