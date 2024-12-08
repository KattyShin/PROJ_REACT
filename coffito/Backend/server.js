import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017/COFFITO", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Example Product schema
const productSchema = new mongoose.Schema(
  {
    prod_name: { type: String, required: true, unique: true },
    prod_price: { type: Number, required: true },
    prod_category: { type: String, required: true },
    // Other fields
    createdAt: {
      type: Date,
      default: Date.now, // Automatically sets the current date/time when a document is created
    },
  },
  { versionKey: false }
);

const Product = mongoose.model("Product", productSchema);

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
});

// Create new product
app.post("/api/products", async (req, res) => {
  try {
    const { prod_name, prod_price, prod_category } = req.body;

    if (!prod_name || !prod_price || !prod_category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the product name already exists
    const existingProduct = await Product.findOne({ prod_name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product name already exists" });
    }

    const newProduct = new Product({ prod_name, prod_price, prod_category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating product", error: err.message });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error deleting product", error: err.message });
  }
});


//Fetching to-update Product
app.get('/api/products/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const product = await Product.findId(id);

    if(!product){
      return res.status(404).json({message: "Product not found"});
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: "Server error"});
  }
})

// Update existing product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { prod_name, prod_price, prod_category } = req.body;

    if (typeof prod_name !== "string" || typeof prod_category !== "string" || isNaN(prod_price)){
      return res.status(400).json({ message: "Invalid input types" });
    }

    const updateFields = {};
    if(prod_name) updateFields.prod_name = prod_name;
    if(prod_price) updateFields.prod_price = prod_price;
    if(prod_category) updateFields.prod_category = prod_category;


    const updatedProduct = await Product.findByIdAndUpdate(id, {$set: updateFields}, {new: true});

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
    
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error updating product", error: err.message });
  }
});



const usersSchema = new mongoose.Schema(
  {
    user_id: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const User = mongoose.model("User", usersSchema)


// Login API
app.post('/api/users', async (req, res) => {
  const { username, password, user_id } = req.body;

  try {
      // Find user by username and user_id
      const user = await User.findOne({ username, user_id });
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }

      // Check if the password matches (using bcrypt if passwords are hashed)
      const isPasswordValid = password === user.password; // or bcrypt.compare(password, user.password) for hashed password
      if (!isPasswordValid) {
          return res.status(400).json({ message: "Invalid password" });
      }

      // If user and password match
      res.status(200).json({ message: "Login successful", user });
  } catch (err) {
      res.status(500).json({ message: "Server error" });
  }
});


//Account fetching of data
app.get('/api/users/:user_id', async (req, res) => {
  const {user_id} = req.params;
  
  try {
    const user = await User.findOne({user_id});

    if(!user){
      return res.status(404).json({message: "User not found"});
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({message: "Server error"});
  }
})

//Account updating of data
app.put('/api/users/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { username, password } = req.body;

  if(!username || !password){
    return res.status(400).send('Username and password are required');
  }

  try {
    const user = await User.findOne({user_id});

    if (!user) {
      return res.status(404).send('User not found');
    }

    user.username = username;
    user.password = password;
    
    const updatedUserData = await user.save();

    console.log("Updated user:", updatedUserData);

    res.status(200).json(updatedUserData); 
  } catch (err) {
    console.error("Error updating user: ", err);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
