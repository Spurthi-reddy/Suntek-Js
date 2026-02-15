import exp from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const userRoute = exp.Router();

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: Number
});

const User = mongoose.model('user', userSchema);

// GET all users
userRoute.get('/users', async (req, res) => {
    const users = await User.find();
    res.send({ message: "users", payload: users });
});

// POST create user (with password hashing)
userRoute.post('/users', async (req, res) => {
    let newUser = req.body;
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    const user = await User.create(newUser);
    res.status(201).send({ message: "User created", payload: user });
});

// POST login
userRoute.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.send({ message: "Invalid username" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        res.send({ message: "Login success" });
    } else {
        res.send({ message: "Invalid password" });
    }
});

// DELETE user
userRoute.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted" });
});