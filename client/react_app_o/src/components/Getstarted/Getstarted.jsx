import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
     <div className="w-[1217px] [background:linear-gradient(116.73deg,_#8743ff,_rgba(41,_38,_96,_0.82)_15.5%,_#424070_85%,_#4136f1)]">
          <div className="flex items-center">
              <div className="flex-shrink-0">
                  <img src="https://i.ibb.co/3dprkGh/7732613-5240.jpg" alt="Image" className="w-48 h-auto" />
             </div>
         <div className = 'text-black h-[90vh] flex justify-center items-center bg-cover flex-grow'>
              <div className="bg-slate-500 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-50 relative">
                  <h1 className="text-4xl text-white font-bold text-center mb-6">Create Account</h1>
                  <form action="">
                  <div className="relative my-4">
                      <input
                      type="email"
                      className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 peer"
                      />
                      <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="my-4">
                      <input
                      type="password"
                      className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 peer"
                      />
                      <label htmlFor="password">Your Password</label>
                  </div>
                  <div>
                      <button type="submit">Create</button>
                  </div>
                  </form>
              </div>
              </div>
              </div>
      </div>
 );
}

export default Login;