import React from "react";
import "./login.css";
import GroupImage from "../../assets/Group 1139.png"; 
import TextField from "@mui/material/TextField";
 

function Login() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 md-5">
           
            <img src={GroupImage} alt="" />
          
          <div style={{marginLeft:"52px" ,marginTop:"18px"}}> 
          <div className="LoremText" style={{ display:'flex',textAlign:"center", }}>
            <h3>Lorem ipsum  <br />Lorem ipsumLorem</h3>
          </div>
          <span style={{ display:'flex',textAlign:"center" ,marginTop:"30px", color:'white', fontSize:"10px", marginLeft:"13px"}}> <p style={{fontSize:"12px"}}>Lorem Ipsum has been the industry's <br /> standardLorem Ipsum has </p></span>
        </div>
        </div>
        <div className="col-md-6">
          <h1>
            Enter <br />
            your number
          </h1>
       

          <div style={{display:'flex',justifyContent:"center",}}>

          <TextField id="standard-basic" label="Enter Here" variant="standard"/>
          </div>
           

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "12px" }}>
              <span style={{ color: "grey" }}>
                By creating passcode you agree with our <br /> Terms
              </span>
              & Conditions <span style={{ color: "grey" }}>and </span> Privacy
              policy
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button className="btn btn-primary">Get Otp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
