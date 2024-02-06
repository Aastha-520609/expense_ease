import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/womens' element={<Category category="women"/>} />
        <Route path='/mens' element={<Category category="men"/>} />
        <Route path='kids' element={<Category category="kid"/>} />
        <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
