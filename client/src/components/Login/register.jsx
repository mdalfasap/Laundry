import React from "react";
import GroupImage from "../../assets/Frame.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ marginTop: "200px", position:"relative" }}>
          <h1>
            Hey There !<br/>
            Welcome
          </h1>
          <div style={{position:"absolute" ,top:"-60px"}}> 
          <img style={{ }} src={GroupImage} alt="" />
          </div>
        </div>
        <div className="col-md-6" style={{ marginTop: "60px", marginLeft:"" }}>
          <div className="inputText">
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email ID or Phone Number" />
            <input type="text" placeholder="Enter your password" />
            <input type="text" placeholder="Confirm password" />
          </div>
          <div className="">
            <button className="btn btn-primary w-333">Register</button>
          </div>
            <p style={{marginTop:"10px",color:"#FFFF"}}> Already have an account? <Link to="/">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
