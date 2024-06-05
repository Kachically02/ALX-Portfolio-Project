import React from "react";
import Applogo from "../images/Applogo.svg";
import "../Styles/platform.css";
import Home from "../images/homeicon.svg";
import Dm from  "../images/Dmicon.svg";
import Notification from "../images/notificationicon.svg";
import More from "../images/moreicon.svg";
import Add from "../images/addicon.svg";

function Success() {
  return (
    <div>
      <div className="platform-box">
      <nav>
      <a href="/">
          <img src={Applogo} className="logo" alt="" />
        </a>
        <div className="input-container">
          <input type="search" placeholder="Search connectio" />
          <i class="bi bi-search"></i>
        </div>
      </nav>
      <div className="body-wrapper">
      <div className="icon-container">
      <div className="icon"><img src={Home} alt=""/></div>
      <div className="icon"><img src={Dm} alt=""/></div>
      <div className="icon"><img src={Notification} alt=""/></div>
      <div className="icon"><img src={More} alt=""/></div>
      <div className="icon-container2">
      <img src={Add} alt=""/>
      <i class="bi bi-person-circle"></i> 
      </div>
      </div>
      <div>
      <h5>Connectio</h5>
      </div>
      </div>
       
      </div>
    </div>
  );
}

export default Success;
