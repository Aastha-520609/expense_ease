import React from 'react'
import './CSS/Login.css'
import { useState } from 'react';
const BASE_URL = 'https://expense-easee.onrender.com';

const Login = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password:"",
    email:""
  })

 const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
 }
  
 const login = async() => {
  console.log("Login successful", formData);
  let responseData;
  await fetch(`${BASE_URL}/login`,{
    method: "POST",
    headers:{
      Accept: 'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors);
  }
 }

 const signup = async() => {
  console.log("Sign Up successful",formData);
  let responseData;
  await fetch(`${BASE_URL}/signup`,{
    method: "POST",
    headers:{
      Accept: 'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token);
    window.location.replace("/");
  }
  else{
    alert(responseData.errors);
  }
 }

  return (
    <div className="login">
      <div className="login-container">
      <h1>{state}</h1>
        <div className="login-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />: <></>}
          <input name='email' value= {formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick = {() => {state==="Login"? login(): signup()}}>Continue</button>
        {state === "Sign Up" ? <p className="already">Already have an account? <span onClick={() => {setState("Login")} }> Login </span></p> : 
        <p className="already">Create an account? <span onClick={() => {setState("Sign Up")}}> Click here </span></p>}
        <div className="agree">
          <input className ="checkbox" type="checkbox" name=" " id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
       </div>
      </div>
    </div>
  )
}

export default Login
