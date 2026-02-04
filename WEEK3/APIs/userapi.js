import exp from 'express';
import { UserModel } from '../model/usermodel.js';

import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

export const userApp = exp.Router();

// --- PUBLIC ROUTES ---

// 1. Create User (Registration)
userApp.post('/users', async (req, res) => {
    try {
        let newUser = req.body;
        // Hash the password
        let hashedPassword = await hash(newUser.password, 12);
        newUser.password = hashedPassword;

        let newUserDoc = new UserModel(newUser);
        await newUserDoc.save();
        res.status(201).json({ message: "User created" });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});

// 2. User Authentication (Login)
userApp.post('/login', async (req, res) => {
    let userCred = req.body;

    // Verify username
    let userOfDB = await UserModel.findOne({ username: userCred.username });
    if (userOfDB === null) {
        return res.status(404).json({ message: "Invalid username" });
    }

    // Compare passwords
    let status = await compare(userCred.password, userOfDB.password);
    if (status === false) {
        return res.status(401).json({ message: "Invalid password" });
    }

    // Create signed token
    let signedToken = jwt.sign(
        { username: userOfDB.username }, 
        'secret_key', 
        { expiresIn: '1h' }
    );

    // Send token as HttpOnly cookie 
    res.cookie('token', signedToken, {
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
        sameSite: "lax"
    });

    res.status(200).json({ message: "Login success", token: signedToken });
});

// --- PROTECTED / OTHER ROUTES ---

// Read all users
userApp.get('/users', async (req, res) => {
    let users = await UserModel.find({}, { password: 0 }); // Projection: hide password
    res.status(200).json({ message: "Successful", payload: users });
});

// Read user by ID
userApp.get("/users/:id", async (req, res) => {
    let objId = req.params.id;
    let userObj = await UserModel.findById(objId);
    res.status(200).json({ message: "User found", payload: userObj });
});

// Update user
userApp.put("/users/:id", async (req, res) => {
    let objId = req.params.id;
    let modifiedUsers = req.body;
    let latestUser = await UserModel.findByIdAndUpdate(
        objId, 
        { $set: { ...modifiedUsers } }, 
        { new: true }
    );
    res.status(200).json({ message: "User updated", payload: latestUser });
});

// Delete user
userApp.delete("/users/:id", async (req, res) => {
    let objId = req.params.id;
    await UserModel.findByIdAndDelete(objId);
    res.status(200).json({ message: "User deleted" });
});
//test route
userApp.get("test",verifyToken,(req,res)=>{
    res.json({message:"test route"});
})