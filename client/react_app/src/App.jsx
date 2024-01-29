import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path = "/Login" element={<Login />} />
          </Routes>
      </div>
    </Router>
  );  
}
export default App;