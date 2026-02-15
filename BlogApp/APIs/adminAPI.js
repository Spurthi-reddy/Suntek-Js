import exp from 'express';
import { ArticleModel } from "../models/ArticleModel.js";
import { UserTypeModel } from "../models/UserModel.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export const adminRoute = exp.Router();


adminRoute.use(verifyToken);

// Read all articles
adminRoute.get('/articles', async (req, res) => {
    try {
        const articles = await ArticleModel.find().populate("author", "firstName email");
        res.status(200).json({ message: "All articles", payload: articles });
    } catch (err) {
        res.status(500).json({ message: "Error", error: err.message });
    }
});

// Block/Unblock user
adminRoute.put('/users/status', async (req, res) => {
    const { userId, isBlocked } = req.body;
    const updatedUser = await UserTypeModel.findByIdAndUpdate(
        userId, 
        { isBlocked }, 
        { new: true }
    );
    res.status(200).json({ message: "User status updated", payload: updatedUser });
});