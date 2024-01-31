import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Navbar />}/>
        <Route path = "/Login" element= {<Login />} />
      </Routes>
    </Router>
  )
}

export default App;