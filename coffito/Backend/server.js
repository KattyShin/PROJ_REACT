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
// Example Product schema with versionKey disabled
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



// Update existing product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { prod_name, prod_price, prod_category } = req.body;

    if (!prod_name || !prod_price || !prod_category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { prod_name, prod_price, prod_category },
      { new: true }
    );
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
