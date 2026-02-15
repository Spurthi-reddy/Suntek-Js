
import exp from 'express'
import {connect} from 'mongoose'
import { userRoute } from './API/userAPI.js';
import { prodRoute } from './API/prodAPI.js';

//Create HTTP server
const app=exp();
const port=4000;
//Connect to MongoDB database
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/ecomdb")
        console.log("Connected to DB")
        app.listen(port,()=>console.log("server listening on port 4000..."))
    }catch(err){}
}


connectDB()
//use body parser middleware
app.use(exp.json())

//forward req to specific APIs
app.use("/user-api",userRoute)
app.use("/product-api",prodRoute)

//Error handling middleware
app.use((err,req,res,next)=>{
    res.json({message:"Error",reason:err.message})
})
