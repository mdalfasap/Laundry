import React from "react";
import GroupImage from "../../assets/Frame.png"; 
import { MuiOtpInput } from 'mui-one-time-password-input'
function sendOtp() {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <h1>
          We have sent <br />
          you an OTP
        </h1>
        <div style={{display:"flex",justifyContent:"center"}}>
           <MuiOtpInput value={otp} onChange={handleChange} style={{width:"250px"}} /> 
        </div>
        <div style={{marginTop:"20px"}}>
          <h1 style={{fontSize:"12px"}}>Don’t recive OTP?  RESENT OTP</h1>
        </div>
      </div>
      <div style={{ position: "relative" ,display: "flex",
              justifyContent: "center" }}>
        <img
          style={{ marginTop: "", width: "850px", height: "270px" }}
          src={GroupImage}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "60px",
            
              marginTop: "30px",
          }}
        >
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export default sendOtp;
