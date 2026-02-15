import exp from 'express';
export const userApp = exp.Router();
let users = []; // This array lives as long as the server is running

userApp.get('/users', (req, res) => {
    res.send({ message: "all users", payload: users });
});

userApp.post('/users', (req, res) => {
    users.push(req.body);
    res.send({ message: "user created", payload: users });
});

userApp.put('/users/:id', (req, res) => {
    let userId = Number(req.params.id);
    let index = users.findIndex(u => u.ID === userId);
    if (index !== -1) {
        users[index] = req.body;
        res.send({ message: "user updated" });
    } else {
        res.status(404).send({ message: "user not found" });
    }
});