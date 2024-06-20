const mongoose = require("mongoose");

const BASE_URL = 'https://expense-easee.onrender.com'; // Ensure this is the correct URL

// Define the Product model
const Product = mongoose.model("Product", {
   id: {
    type: Number,
    required: true,
   },
   name: {
    type: String,
    required: true,
   },
   image: {
    type: String,
    required: true,
   },
   category: {
    type: String,
    required: true,
   },
   new_price: {
    type: Number,
    required: true,
   },
   old_price: {
    type: Number,
    required: true,
   },
   date: {
    type: Date,
    default: Date.now,
   },
   available: {
    type: Boolean,
    default: true,
   },
});
// Connect to MongoDB
mongoose.connect("mongodb+srv://aasthachaudhary5050:aasthaEcommerce@cluster0.4hu117e.mongodb.net/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to update image URLs
const updateImageURLs = async () => {
  try {
    const products = await Product.find({});
    for (let product of products) {
      const updatedImageURL = product.image.replace('http://localhost:4000', BASE_URL);
      product.image = updatedImageURL;
      await product.save();
    }
    console.log('Image URLs updated successfully');
  } catch (error) {
    console.error('Error updating image URLs:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Execute the function
updateImageURLs();

