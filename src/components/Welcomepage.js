import React from "react";
import "../Styles/welcome.css";
import Applogo from "../images/Applogo.svg";
import image2 from "../images/image2.svg";
import image from "../images/image.svg";

function Welcomepage() {
  return (
    <div className="welcomepg">
      <div className="navigation">
        <nav>
        <a href="/"><img src={Applogo} alt="" /></a>
          <div className="nav-icon">
            <button>Events</button>
            <button>Contacts</button>
            <span>
              <i class="bi bi-person-circle"></i> 
              <a href="#"><h5>K</h5></a>
            </span>
          </div>
        </nav>
      </div>
      <button className="welcome-btn">Welcome, Kachi</button>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
           <div className="card"> <img src={image2} alt="" /></div>
          </div>
          <div className="col-sm-12 col-lg-6">
          <div className="card"><img src={image} alt="" /></div>
          </div>
        </div>
        
        <div className="container">
        <div className="row ">
          <div className="col-12 discussion-section">
            <h2>DISCOVER YOUR OPPORTUNITIES</h2>
            <p>
              Join in the discussion and get to participate in an interactive
              platform where opportunities abound for everyone. It’s just a
              click away.
            </p>
            <button className="discussion-btn">Join Discussion</button>
          </div>
        </div>
      </div>
      
        </div>
      <div className="footer">
        <p> &copy; 2024 Connectio. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Welcomepage;
