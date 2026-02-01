import { Schema, model } from 'mongoose'
//create product schema(id, productName, price) 

const ProductSchema = new Schema({
    id: {
        type: String,
        required: [true, "ID of the product"],
        // Fix: Changed minLength message to match the actual value 10 
        minLength: [10, "Min length should be 10"], 
        maxLength: [20, "Max length exceeded"]
    },
    ProductName: {
        type: String,
        required: [true, "product name"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        // Fix: Updated error messages to refer to price, not age 
        min: [2000, "Price should be at least 2000"],
        max: [25000, "Price should be less than 25000"]
    }

}, {
    strict: "throw",
    // Fix: Mongoose uses 'timestamps' (plural), not 'timestamp' 
    timestamps: true 
});

//create model of that schema
export const ProductModel = model("product", ProductSchema)
 