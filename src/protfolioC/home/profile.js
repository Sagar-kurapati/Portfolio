import React from 'react';
import "./Profile.css";


import pic from"../../assets/Home/PROFILE.jpg";
export default function Profile() {
  return (
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

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
            </div>
          </div>

          <div className="profile-detail-name">
            <span className='primary-text'>
              {""}
              Hello I'm<span className="highlighted-text"> Sagar Kurapati</span>
            </span>
          </div>
          <div className="profile-deatils-role">
            <span className='primary-text'>
              {""}
              <h1>
                {}
              
              </h1>
              <span className='profile-role-tagline'>
                knack of building applications with frontend and backend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className='btn primary-btn'>
              {""}
              Hire Me{""}
            </button>
            <a href='resume.pdf' download="Sagar resume.pdf">
              <button className='btn highlighted-btn'>
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-background">
            <img src={pic} alt='123' style={{ height: "380px", width: "400px" }} />

          </div>
        </div>
      </div>
    </div>
  );
}
