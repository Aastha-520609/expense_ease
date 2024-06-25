import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
const BASE_URL = 'https://expense-easee.onrender.com';

const AddProduct = () => {

    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        try {
            let formData = new FormData();
            formData.append('product', image);

            const uploadResponse = await fetch(`${BASE_URL}/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image');
            }

            const responseData = await uploadResponse.json();

            if (responseData.success && responseData.image && responseData.image.url) {
                // Update productDetails to include image URL
                const updatedProductDetails = {
                    ...productDetails,
                    image: responseData.image.url, // Use uploaded image URL here
                };

                // Send product details to backend for saving
                const addProductResponse = await fetch(`${BASE_URL}/addproduct`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedProductDetails),
                });

                if (!addProductResponse.ok) {
                    throw new Error('Failed to add product');
                }

                const addProductData = await addProductResponse.json();
                console.log('Product added successfully:', addProductData);

                alert('Product added successfully!');
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        }
    };
    
    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Select Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                    <option value='kid'>Kid</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt='Upload' className='addproduct-thumbnail-img' />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>
                Add
            </button>
        </div>
    )
}

export default AddProduct
/* import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const BASE_URL = 'https://expense-easee.onrender.com';

const AddProduct = () => {
    const [image, setImage] = useState(false); // State to hold the selected image file

    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'Women',
        old_price: '',
        new_price: '',
    });

    // Function to handle image selection
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    // Function to handle input field changes
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    // Function to add a new product
    const Add_Product = async () => {
        try {
            const formData = new FormData();
            formData.append('product', image); // Append the selected image file to FormData

            // Upload image to the server
            const uploadResponse = await fetch(`${BASE_URL}/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image');
            }

            const imageData = await uploadResponse.json();

        
            if (imageData.success) {
                const product = {
                    ...productDetails,
                    image: imageData.image_url,
                };

                const addProductResponse = await fetch(`${BASE_URL}/addproduct`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                });

                const addProductData = await addProductResponse.json(); 

                if (addProductData.success) {
                    toast.success('Product added successfully'); 
                } else {
                    toast.error('Failed to add product'); 
                }
            } else {
                toast.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            toast.error('Failed to add product');
        }
    };

    return (
        <div className='add-product'>
            <div className='addproduct-itemfield'>
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className='addproduct-itemfield'>
                <p>Select Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                    <option value='kid'>Kid</option>
                </select>
            </div>
            <div className='addproduct-itemfield'>
                <label htmlFor='file-input'>
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt='Upload' className='addproduct-thumbnail-img' />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={() => {Add_Product()}} className='addproduct-btn'>
                Add
            </button>
        </div>
    );
};

export default AddProduct; */
