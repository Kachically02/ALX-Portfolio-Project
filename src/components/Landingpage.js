import React from "react";
import "../Styles/Landing.css";
import Applogo from "../images/Applogo.svg";
import Ellipse from "../images/ellipse.svg";
import Landingpageimg from "../images/Landingpageimg.svg";
import Landingpageimg2 from "../images/Landingpageimg2.svg";

function LandingPage() {
  return (
    <div>
    <div className="container">
      <nav>
        <a href="/"><img src={Applogo} alt="" /></a>
        <ul>
          <li>
           <a href="/login"><button className="login">Login</button></a> 
          </li>
          <li>
            <a href="/register"><button className="reg">Register</button></a>
          </li>
        </ul>
      </nav>
      <div className="container-main">
        <div className="row">
          <div className=" col-sm-12 col-lg-6">
            <div className="desc">
              <img src={Ellipse} className="ellipse1" alt="" />
              <div className="text-box">
                <h2>
                  We <span> CONNECT</span> Talents In <br/>One Platform
                </h2>
                <p>
                  We are all about bringing great talents together. Our goal is
                  to <br/> make connections that benefit everyone involved, making the <br/>
                  world of professionalism easier and more rewarding for all.
                </p>
              </div>
              <img src={Ellipse} className="ellipse" alt="" />
            </div>
            <div class="bar">
              <div className="box">
                <span className="number">10+</span>
                <span className="text">Years on the Platform</span>
              </div>
              <div className="box">
                <span className="number">1000+</span>
                <span className="text">Professional Connections</span>
              </div>
              <div className="box">
                <span className="number">2000+</span>
                <span className="text">Success Stories</span>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <div className="Landingpageimage-container">
              <img src={Landingpageimg} alt="" />
              <img src={Landingpageimg2} alt="" />
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

export default LandingPage;
