import React from "react";
import { Link } from "react-router-dom";

import './Register.css';

const Register = (props) => {
  return (
    <div className="Register" >
      <div className="Link-to-home">
        <Link className="Link-to-home-Link" to='/'>Sample Website</Link>
      </div>
      <form className="Form">
        <h1>Create Account</h1>
        <div className="input-box">

          <label> Your Name </label>
          <input type="text" className="input-controler" placeholder="Enter your your name" />

        </div>
        <div className="input-box">

          <label> Email </label>
          <input type="text" className="input-controler" placeholder="Enter your Email" />

        </div>

        <div className="input-box">

          <label> Password </label>
          <input type="password" className="input-controler" placeholder="Enter your password" />
          <span className="input-box-password-span">Passwords must be at least 6 characters.</span>
        </div>

        <div className="input-box">

          <label> Re-enter Password </label>
          <input type="password" className="input-controler" placeholder="Enter your password" />


        </div>

        <div className="input-box">
          <button className="Form-btn" >Continue</button>
        </div>



      </form>



    </div>
  )
}
export default Register;