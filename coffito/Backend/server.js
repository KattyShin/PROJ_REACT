import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/COFFITO', { })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Example Product schema
// Example Product schema with versionKey disabled
const productSchema = new mongoose.Schema({
    prod_name: { type: String, required: true, unique: true },
    prod_price: { type: Number, required: true },
    prod_category: { type: String, required: true }
}, { versionKey: false });

const Product = mongoose.model('Product', productSchema);

// Routes
// Get all products
// Get product by name (for checking existence)
// Check if product exists by name
app.get('/api/products/check-name', async (req, res) => {
    const { prod_name } = req.query;
    try {
      const existingProduct = await Product.findOne({ prod_name });
      if (existingProduct) {
        return res.status(200).json({ exists: true });
      }
      res.status(200).json({ exists: false });
    } catch (err) {
      console.error('Error checking product name:', err);
      res.status(500).json({ message: 'Error checking product name', error: err.message });
    }
  });
  


// Create new product
app.post('/api/products', async (req, res) => {
    try {
        const { prod_name, prod_price, prod_category } = req.body;

        if (!prod_name || !prod_price || !prod_category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newProduct = new Product({ prod_name, prod_price, prod_category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        if (err.code === 11000) {
            // Duplicate product name error
            return res.status(400).json({ message: 'Product name already exists' });
        }
        console.error(err);
        res.status(500).json({ message: 'Error creating product', error: err.message });
    }
});


// Update existing product
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { prod_name, prod_price, prod_category } = req.body;

        if (!prod_name || !prod_price || !prod_category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, { prod_name, prod_price, prod_category }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating product', error: err.message });
    }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting product', error: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
