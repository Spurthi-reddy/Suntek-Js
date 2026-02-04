import exp from 'express';
import { ProductModel } from '../model/ProductModel.js';
export const productRoute= exp.Router()


// Create product
productRoute.post('/products', async (req, res) => {
    // get new product from req body 
    let newProduct = req.body;
    // create new doc 
    let newProductDoc = new ProductModel(newProduct);
    // save in db 
    await newProductDoc.save();
    // send res
    res.status(201).json({ message: "product created" });
})

// Read all products
productRoute.get('/products', async (req, res) => {
    // read products from DB
    let products = await ProductModel.find();
    // send res
    res.status(200).json({ message: "successful", payload: products });
})

// Read product by object id
productRoute.get("/products/:id", async (req, res) => {
    // get objectid from url
    let objId = req.params.id;
    // find product in db
    let productObj = await ProductModel.findById(objId);
    // send res
    res.status(200).json({ message: "product found", payload: productObj });
})

// Update product
productRoute.put("/products/:id", async (req, res) => {
    // get objectID from url params
    let objId = req.params.id;
    // get modified product from req body
    let modifiedProduct = req.body;
    // make update
    let latestProduct = await ProductModel.findByIdAndUpdate(
        objId, 
        { $set: { ...modifiedProduct } }, // Fixed spelling from modifiedProducts
        { new: true }
    );
    // send res
    res.status(200).json({ message: "product updated", payload: latestProduct });
})

// Delete product
productRoute.delete("/products/:id", async (req, res) => {
    // get objectID from url
    let objId = req.params.id;
    // delete product by id
    await ProductModel.findByIdAndDelete(objId); 
    // send res
    res.status(200).json({ message: "product deleted" });
})