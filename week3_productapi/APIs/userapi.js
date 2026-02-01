import exp from 'express'
import { UserModel } from '../../model/usermodel.js'
export const userApp = exp.Router()

// user API routes

//create User
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    //create new doc
    let newUserDoc =new UserModel(newUser)
    console.log(newUserDoc)
    //save in db
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"user created"})
})
//read user
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let users= await UserModel.find()
    //send res
    res.status(200).json({message:"sucessful"})
})
// read users
userApp.get('/users/:id',async(req,res)=>{})
//read users by object id
userApp.get("users/:id",async(req,res)=>{
    //get objectid from url
    let objId=req.params.id;
    //find user in db
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})
//Update users'
userApp.put("/users/:id",async(req,res)=>{
    //get objectID from url params
    let objId =req.params.id
    //get modified user from req
    let modifiedUsers=req.body
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUsers}},{new:true})
    //send res

})
//Delete Users
userApp.delete("/users/:id",async(req,res)=>{
    let objId=req.params.id;
    //delete user by id
    await UserModel.findByIdAndDelete(objId)

})