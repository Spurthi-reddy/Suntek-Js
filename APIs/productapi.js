import exp from 'express';
import { ProductModel } from '../model/productmodel.js';
export const productApp = exp.Router()


// Create product
productApp.post('/products', async (req, res) => {
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
productApp.get('/products', async (req, res) => {
    // read products from DB
    let products = await ProductModel.find();
    // send res
    res.status(200).json({ message: "successful", payload: products });
})

// Read product by object id
productApp.get("/products/:id", async (req, res) => {
    // get objectid from url
    let objId = req.params.id;
    // find product in db
    let productObj = await ProductModel.findById(objId);
    // send res
    res.status(200).json({ message: "product found", payload: productObj });
})

// Update product
productApp.put("/products/:id", async (req, res) => {
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
productApp.delete("/products/:id", async (req, res) => {
    // get objectID from url
    let objId = req.params.id;
    // delete product by id
    await ProductModel.findByIdAndDelete(objId); // Fixed spelling from ProductsModel
    // send res
    res.status(200).json({ message: "product deleted" });
})