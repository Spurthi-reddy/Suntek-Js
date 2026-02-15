import exp from 'express';
import mongoose from 'mongoose';

export const productRoute = exp.Router();

const productSchema = new mongoose.Schema({
    id: String,
    ProductName: String,
    price: Number
});

const Product = mongoose.model('product', productSchema);

// POST create product
productRoute.post('/products', async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).send({ message: "Product created", payload: product });
});

// GET all products
productRoute.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send({ message: "all products", payload: products });
});