import React from "react";
import GroupImage from "../../assets/Frame.png";
import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ marginTop: "200px", position: "relative" }}
        >
          <h1>
            Welcome back! Glad <br /> to see you, Again!
          </h1>
          <div style={{ position: "absolute", top: "-60px" }}>
            <img style={{}} src={GroupImage} alt="" />
          </div>
        </div>
        <div
          className="col-md-6"
          style={{ marginTop: "160px", marginLeft: "-80px" }}
        >
          <div className="inputText">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input type="text" placeholder="Enter Email ID or Phone Number" />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input type="text" placeholder="Enter your password" />
            </div>
            <p
              style={{
                color: "#FFFF",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link to="/">Forgot Password?</Link>
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary w-333">Log In</button>
          </div>
          <p
            style={{
              marginTop: "10px",
              color: "#FFFF",
              display: "flex",
              justifyContent: "flex-end",
            }} 
          >
            Already have an account? <Link to="register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
