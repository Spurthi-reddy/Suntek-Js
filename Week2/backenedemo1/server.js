import exp from 'express';
import { userApp } from './userapi.js';
export const app = exp();
app.listen(4000,()=>console.log('Server is running on port 4000'));
app.use(exp.json()); // Body parsing middleware

app.use('/user-api', userApp);
// In-memory data store
let users = [];

// 1. GET all users
app.get('/users', (req, res) => {
    res.status(200).json({ message: "all users", payload: users });
})

// 2. GET user by ID
app.get('/users/:id', (req, res) => {
    // Convert string ID from params to Number
    let userId = Number(req.params.id); 
    let user = users.find(userObj => userObj.id === userId);

    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ message: "user found", payload: user });
});

// 3. POST - Create user
app.post('/users', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "user created" });
});

// 4. PUT - Update user
// PUT req handling route (update users)
// PUT req handling route (update users)
app.put('/users/:id', (req, res) => {
    let modifiedUser = req.body;
    let userIdFromUrl = Number(req.params.id); // Convert URL string to Number
    
    // FIX: Ensure the variable name matches the 'if' condition below
    let userIndex = users.findIndex(userObj => userObj.id === userIdFromUrl);
    
    // Check if the user exists
    if (userIndex === -1) {
        return res.status(404).json({ message: "user not found" });
    }

    // Modify the user in the array
    users.splice(userIndex, 1, modifiedUser);
    res.status(200).json({ message: "user modification done" });
});

// DELETE req handling route (delete users)
app.delete('/users/:id', (req, res) => {
    let userIdFromUrl = Number(req.params.id);
    let userIndex = users.findIndex(userObj => userObj.id === userIdFromUrl);

    if (userIndex === -1) {
        return res.status(404).json({ message: "user not found" });
    }

    // Remove 1 element at the found index
    users.splice(userIndex, 1);
    res.status(200).json({ message: "user deleted successfully" });
});

app.listen(4000, () => console.log('Server is running on port 4000'));
app.use(exp.json()); // Body parsing middleware

