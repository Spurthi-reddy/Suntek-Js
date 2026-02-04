import { Schema, model } from 'mongoose'
//create product schema(id, productName, price) 

const ProductSchema = new Schema({
    id: {
        type: String,
        required: [true, "ID of the product"],
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
        min: [2000, "Price should be at least 2000"],
        max: [25000, "Price should be less than 25000"]
    }

}, {
    strict: "throw",
    timestamps: true 
});

//create model of that schema
export const ProductModel= model("product", ProductSchema)
 