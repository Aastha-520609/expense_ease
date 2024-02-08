import React from 'react'
import {useState} from 'react'
import './AddProduct.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Women",
        old_price:"",
        new_price:""
    })

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const Add_Product = async () => {
      let product = productDetails;
      console.log(productDetails);

    try {
      const response = await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Product Added");
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred while adding the product");
    }
  };
    
  return (
    <div className = 'add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value = {productDetails.name} onChange = {changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value = {productDetails.old_price} onChange = {changeHandler} type="text" name="old_price" placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value = {productDetails.new_price} onChange = {changeHandler} type="text" name="new_price" placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <select value = {productDetails.category} onChange= {changeHandler} name="category" className ='add-product-selector'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <button onClick={() => {Add_Product()}} className='addproduct-btn'>Add</button>
      </div>
    </div>
  )
}

export default AddProduct
