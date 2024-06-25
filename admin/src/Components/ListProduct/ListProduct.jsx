import React, { useState, useEffect } from 'react';
import cross_icon from '../../assets/cross_icon.png';
import './ListProduct.css';

const BASE_URL = 'https://expense-easee.onrender.com';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${BASE_URL}/allproducts`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await fetch(`${BASE_URL}/removeproduct/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='list-product'>
            <h1>All Products</h1>
            <div className='listproduct-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className='listproduct-allproducts'>
                <hr />
                {allproducts.map((product, index) => (
                    <div key={index} className='listproduct-format-main listproduct-format'>
                        <img src={`${product.image}`} alt='Product' className='listproduct-product-icon' />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => deleteProduct(product.id)} className='listproduct-remove-icon' src={cross_icon} alt='Remove' />
                    </div>
                ))}
                <hr />
            </div>
        </div>
    );
};

export default ListProduct;
