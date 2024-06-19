const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
const app = express(); /* executes the express function */
const path = require("path"); /* gets access to backend directory of our express app */
const cors = require("cors");
/* require("dotenv").config(); */
const jwt = require('jsonwebtoken');
const multer = require("multer");

app.use(express.json());/*  request we get from response will automatically parse through json */
app.use(cors());
/* const port = process.env.PORT;
 */
/* Database connection with mongodb */
mongoose.connect("mongodb+srv://aasthachaudhary5050:aasthaEcommerce@cluster0.4hu117e.mongodb.net/e-commerce")

/* Schema for creating user */
const Users = mongoose.model('Users',{
  name:{
    type: String,
  },
  email:{
    type: String,
    unique: true,
  },
  password:{
    type: String,
  },
  cartDate:{
    type: Object,
  },
  date:{
    type:Date,
    default: Date.now,
  }
 });

/* creating end point for registering user  */
app.post('/signup', async(req,res) => {
  let check = await Users.findOne({email:req.body.email});
  if(check)
  {
    return res.status(400).json({success:false, errors: "This email id is already registered"})
  }

  let cart = {};
  for(let i=0; i<300; i++)
  {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartDate:cart,
  })

  /* saving the user in database */
  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data, 'secret_ecom');
  res.json({success:true, token})
})

/* Creating endpoint for user-login */
app.post('/login', async(req, res) => {
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }

      const token = jwt.sign(data,'secret_ecom');
      res.json({success:true, token});
    }
    else{
      res.json({success:false, errors: "Password is incorrect"});
    }
  }
  else{
    res.json({success:false, errors: "Email Id is incorrect"})
  }
})



/* API Creation */
app.get("/",(req,res) => {
  res.send("Express App is Running")
})


/* Schema for creating products */
const Product = mongoose.model("Product",{
   id:{
    type:Number,
    required:true,
   },
   name:{
    type:String,
    required: true,
   },
   image:{
    type:String,
    required:true,
   },
   category:{
    type:String,
    required: true,
   },
   new_price:{
    type:Number,
    required: true,
   },
   old_price:{
    type:Number,
    required:true
   },
   date:{
    type:Date,
    default: Date.now,
   },
   available:{
    type: Boolean,
    default: true
   },
})

/* post request */
app.post('/addproduct', async(req,res) => {
/*   concept of genertating new id by default instead of manually writing it */ 
  let products = await Product.find({});
  let id;
  if(products.length > 0)
  {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else{
    id=1;
  }
  const product = new Product({
    id:id,
    name:req.body.name,
    image: req.file.filename,
    category: req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  });

  console.log(product);
 /*  saving the product in database using await */
  await product.save();
  /* This is execute after the product is save */
  console.log("Saved");
  res.json({
  success: true,
  name: req.file.filename,
 })
})

/* Remove product */
app.delete('/removeproduct/:id', async (req, res) => {
  try {
    const productId = req.params.id; // Extract the product ID from URL parameters
    
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const deletedProduct = await Product.findOneAndDelete({ id: productId });
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/* Creating API for getting all products */
app.get('/allproducts', async (req, res) => {
  try {
      let products = await Product.find({});
      products = products.map(product => ({
          ...product._doc,
          image: `${BASE_URL}/images/${product.image}`
      }));
      res.json(products);
  } catch (error) {
      console.error('Error fetching all products:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
/* Creating endpoint for newcollection data */
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

/* Creating endpoint for popular in women category */
app.get('/popularinwomen', async(req,res)=>{
  let products = await Product.find({category:"women"});
  let popular_in_women = products.slice(0,4);
  console.log("Popular in women fetched");
  res.send(popular_in_women);
})

/* Creating middleware to fetch user */
const fetchUser = async (req,res,next) => {
   const token = req.header('auth-token');
   if(!token)
   {
    res.status(401).send({errors: "Invalid Token"});
   }
   else{
    try{
      const data = jwt.verify(token, 'secret_ecom');
      req.user = data.user;
      next();
    }catch(error){
        res.status(401).send({errors: "Use Valid Token"})
    }
   }
}

/* creating api for adding products in cartdata */
app.post('/addtocart', fetchUser, async(req, res) => {

  console.log("Added", req.body.itemId);
  let userData = await Users.findOne({_id: req.user.id});
  userData.cartData[req.body.itemId] += 1; 
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
  res.send("Added")
})

/* Creating api for removing product from cart */
app.post('/removefromcart', fetchUser, async(req, res) => {
  
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({_id: req.user.id});
  if(userData.cartData[req.body.itemId] > 0)
  {
    userData.cartData[req.body.itemId] -= 1; 
  }
  await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
  res.send("Removed")
})

/* creating api to retrive cart data */
app.post('/getcart', fetchUser, async(req, res) => {
  console.log("Get cart");
  let userData = await Users.findOne({_id: req.user.id})
  res.json(userData.cartData);
})

app.listen(port,(error) => {
  if(!error){
    console.log("Server Running on Port " + port)
  }
  else{
    console.log("Error: "+error);
  }
})

/* Image storage engine */
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req, file, cb)=>{
     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

/* upload function  - to pass the above configuration*/
const upload = multer({ storage });

/* Creating upload endpoint for images */
app.use('/images', express.static('upload/images'));
app.post("/upload",upload.single(`product`),(req,res) => {
   res.json({
    success: 1,
    image_url: `https://expense-easee.onrender.com/images/${req.file.filename}`
   })
})