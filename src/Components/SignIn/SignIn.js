import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


import ReactLoading from 'react-loading';
import './SignIn.css';


import { login } from "../Store/AuthSlice"





const SignIn = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const { user, isLoading, isSuccess, isError, errorMassage } = useSelector(
    (state) => state.auth)

  const dispatch = useDispatch();

  const { username, password } = credentials

  useEffect(() => {

    if (isSuccess) {
      navigate('/')
    }

    if (isError) {

      
      alert("Plase check your password or usernameee");

    }
   

  }, [isSuccess, isError, navigate, isLoading])



  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log('e.target.name', e.target.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", credentials.username)
    const userData = {
      username,
      password,
    }

    console.log("credentails", credentials);
    console.log("userData", userData);


    dispatch(login(userData));

   
  }




  return (

    <div className="Sign-In-main">
    {
      isLoading  ?  
      

      <ReactLoading type={"spokes"} color={"#03fc4e"} height={70} width={70} className="loading"  />
      
      :
      
      <div className="Sign-In" >
      <div className="Sign-In-Link-to-home">
      <Link className="Sign-In-Link-to-home-Link" to='/'>Home</Link>
      </div>
      <form className="Sign-In-Form">
      <h1>Sign-In</h1>
      <div className="Sign-In-input-box">
      
      <label> Username </label>
      <input name="username" type="text" className="Sign-In-input-controler" placeholder="Enter your username" value={credentials.username} onChange={handleChange} />
      
      </div>
      
      <div className="Sign-In-input-box">

      <label> Password </label>
      <input name="password" type="password" className="Sign-In-input-controler" placeholder="Enter your password" onChange={handleChange} />
      
      </div>

      <div className="Sign-In-input-box">
      <button className="Sign-In-Form-btn" type="submit" onClick={handleSubmit} >Continue</button>
      </div>
      
        <div className="Sign-In-input-box" >
        <a href="/help" className="Sign-In-Form-Help"> Are you lost your password ? </a>
        </div>
        
        </form>
        
        <div className="Sign-In-divider">
        <h5>New to site ?</h5>

      </div>
      <div className="Sign-In-register-btn">
        <Link to="/register" className="Sign-In-register-link">
          Creat your account
        </Link>

      </div>


</div>
}
      </div>


  )

}
export default SignIn;