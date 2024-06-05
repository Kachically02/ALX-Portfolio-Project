import React from "react";
import Applogo from "../images/Applogo.svg";
import "../Styles/Reg.css";

function Registerpage() {
  return (
    <div className="main-container">
    <a href="/"><img src={Applogo} alt="" /></a>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6"></div>
          <div className="col-sm-12 col-lg-6">
            <div className="form-container">
            <div className="box">
              <form>
                <h3>User Registration</h3>
                <label className="label">Username</label>
                <br />
                <input type="text" name="username" placeholder="Your Username" />
                <br />
                <label className="label">Email</label>
                <br />
                <input type="email" name="email" placeholder="Your Email" />
                <br />
                <label className="label">Password</label>
                <br />
                <input type="password" name="password" placeholder="Type Password"/><br />
                <label className="label">Confirm Password</label>
                <br />
                <input type="password" name="password" placeholder="Comfirm Password"/>
              </form>
             <a href="/success"><button>Register</button></a> 
              </div>
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

export default Registerpage;
