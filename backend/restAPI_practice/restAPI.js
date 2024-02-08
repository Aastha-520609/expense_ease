const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
const app = express(); /* executes the express function */
const path = require("path"); /* gets access to backend directory of our express app */
const cors = require("cors");
/* require("dotenv").config(); */

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
  let check = await Users.findOne()
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
  /*  image:{
    type:String,
    required:true,
   }, */
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
    /* image: req.body.image, */
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
  name: req.body.name,
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
app.get('/allproducts',async(req,res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})

app.listen(port,(error) => {
  if(!error){
    console.log("Server Running on Port " + port)
  }
  else{
    console.log("Error: "+error);
  }
})





/* const express = require("express");
const mongoose = require("mongoose");

app.post('/removeproduct', async(req,res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name
  })
})

const app = express();
const port = 3000;

const data = 

app.use(express.json());

const uri = "mongodb+srv://aasthachaudhary5050:AasthaMongo@cluster0.mnrvgwo.mongodb.net/test";
console.log("Database connected");

//creating a schema
const Schema = new mongoose.Schema({
        uid: Number,
        sem1: Number,
        sem2: Number,
        cgpa: Number,
  });

const studentsDocument = mongoose.model("students", Schema);

//get
app.get("/students", (req,res) => {
    res.json(students);
});

// post
app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({ message: 'Post done successful', student: newStudent });
  });

//put
app.put('/students/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const studentIndex = students.findIndex((s) => s.uid === uid);

    if (studentIndex !== -1) {
    students[studentIndex] = req.body;
    res.json({ message: 'Put done', student: students[studentIndex] });
    } else {
    res.status(404).json({ error: 'Student not found' });
    }
});

//patch
app.patch('/students/v1/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const student = students.find((s) => s.uid === uid);
  
    if (student) {
      Object.assign(student, req.body);
      res.json({message: 'Patch done', student });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });

//delete
app.delete('/students/d1/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const studentIndex = students.findIndex((s) => s.uid === uid);
  
    if (studentIndex !== -1) {
      const deletedStudent = students.splice(studentIndex, 1)[0];
      res.json({ message: 'Delete done', student: deletedStudent });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });   

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); */