import React from 'react'
import './CSS/Login.css'
import {useState} from 'react';

const Login = () => {

  const [state, setState] = useState("Sign Up");

  return (
    <div className="login">
      <div className="login-container">
      <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" ? <input type="text" placeholder="Your Email" />: <></>}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        {state === "Sign Up" ? <p className="already">Already have an account? <span onClick={() => {setState("Login")} }> Login </span></p> : 
        <p className="already">Create an account?<span onClick={() => {setState("Sign Up")}}> Click here </span></p>}
        <div className="agree">
          <input className ="checkbox" type="checkbox" name=" " id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default Login
