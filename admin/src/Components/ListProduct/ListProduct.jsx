import React from 'react'
import {useState, useEffect} from 'react'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async ()=> {
     await fetch('http://localhost:4000/allproducts')
     .then((res) => res.json())
     .then((data) => {setAllProducts(data)});
  }

/*  to run fetchinfo whenever its mounted  */
useEffect(() =>{
    fetchInfo();
},[])

const delete_product = async(id) => {
    await fetch(`http://localhost:4000/removeproduct/${id}`,{
        method:'DELETE',
        headers:{
            Accept:'application/json',
            'Content-Type': 'application/json',
        }
    });
    await fetchInfo();
}

 
return (
    <div className = 'list-product'>
      <h1>All Products</h1>
      <div className="listproduct-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index)=>{
            return <div key={index} className="listproduct-format-main">
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img className = 'listproduct-remove-icon' src={cross_icon} alt="" />
              <p onClick = {() => {delete_product(product.id)}}>Delete</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default ListProduct
