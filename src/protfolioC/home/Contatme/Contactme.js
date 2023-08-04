import React from 'react';
import "./Contactme.css";


export default function Contactme() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
          <div className="form">
            <h2>Get in touch</h2>
            <div className="from1">
              Name<br/><input type="text" Name="Name" /><br/>
              Email<br/><input type="text" Name="email" /><br/>
              Message<br/><input type="textbox" Name="msg"/><br/>
              <br/>
              <input className='btn highlighted-btn' type="submit" value="Submit"/>
            </div>
        </div>
      
    </div>
  );
}
