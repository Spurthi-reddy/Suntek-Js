import exp from 'express'
import { ProductModel } from '../model/ProductModel.js';
export const prodRoute=exp.Router()


//route to create new product
prodRoute.post("/products",async(req,res)=>{
    //get product from req
    let productObj=req.body
    //create product document
    let productDocument=new ProductModel(productObj)
    //save
    await productDocument.save()
    //res
    res.status(201).json({message:"Product crearted"})
})