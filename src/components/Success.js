import React from "react";
import Applogo from "../images/Applogo.svg";
import successimg from "../images/successimg.svg";
import "../Styles/success.css"

function Success() {
  return (
    <div>
      <div className="main-box">
       <a href="/"> <img src={Applogo} className="logo" alt="" /></a>
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 box">
              <img src={successimg} alt="" />
              <h3>Success</h3>
              <p>Your account has been successfully registered</p>
              <a href="/welcome"><button>Continue</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
