import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
      <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Email" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="already">Already have an account? <span> Login </span></p>
        <div className="agree">
          <input className ="checkbox" type="checkbox" name=" " id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default Login
