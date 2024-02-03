import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'
import Login from './components/Login/Login'
import Getstarted from './components/Getstarted/Getstarted'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path= '' element = {<Home />} />
      <Route path= 'about' element = {<About />} />
      <Route path= 'features' element = {<Features/>} /> 
       <Route path= 'login' element = {<Login />} /> 
       <Route path= 'getstarted' element = {<Getstarted />} />
    </Route>
    
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
