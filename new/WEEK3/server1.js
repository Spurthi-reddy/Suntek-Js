import exp from 'express';
import { connect } from 'mongoose';
import { userRoute } from './APIs/userAPI.js';
import { productRoute } from './APIs/ProductAPI.js';

const app = exp();
const port = 4000;

// 1. Middlewares
app.use(exp.json());

// 2. Routes
app.use("/user-api", userRoute);
app.use("/product-api", productRoute);

// 3. Database Connection & Server Start
async function connectDB() {
    try {
        await connect("mongodb://localhost:27017/ecomdb");
        console.log("Connected to MongoDB...");
        
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit if DB fails
    }
}

connectDB();

// 4. Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Error", reason: err.message });
});