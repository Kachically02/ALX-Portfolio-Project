import React from "react";
import "../Styles/login.css";
import Applogo from "../images/Applogo.svg";
import Backgroundimage from "../images/backgroundimage.svg";
import Google from "../images/google.png";

function Loginpage() {
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
          <h3>User Sign In</h3>
          <label>Email</label>
          <br />
          <input type="email" name="email" placeholder="Your Email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" name="password" placeholder="Your Password" />
        </form>
        <a href="/welcome"><button className="login-btn">Login</button></a>
        <br />
        <a href="#">Forgot Password?</a>
        <h4>
          Need Account? <a href="#">Sign Up</a>
        </h4>
        <button className="google-btn">
          <img src={Google} alt="" /> Sign In With Google
        </button>
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

export default Loginpage;
