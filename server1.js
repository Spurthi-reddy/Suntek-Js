import exp from 'express';
import { connect } from 'mongoose';
import { userApp } from './APIs/userapi.js';
import { productApp } from './APIs/productapi.js'; 


const app = exp();
const port = 4000;

// Middleware to parse JSON
app.use(exp.json());

// Use your middleware/routes
app.use('/user-api', userApp);
app.use('/product-api', productApp);

// Connect to DB server
async function connectDB() {
    try {
        // Corrected the colon after mongodb
        await connect('mongodb://localhost:27017/suntek_db');
        console.log("db connection success");
        
        // Start server only after DB connects
        app.listen(port, () => console.log(`server listening on port ${port}`));
    } catch (err) {
        console.error("db connection failed:", err);
    }
}

// Execute the connection function
connectDB();



//error handling middleware
function errorHandler(err,req,res,next){
res.json({message:"error",reason:err.message})
}
app.use(errorHandler)