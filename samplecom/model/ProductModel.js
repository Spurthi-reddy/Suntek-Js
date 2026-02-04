import {Schema,model} from 'mongoose'

//product schema
const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Product name required"]
    },
    price:{
        type:Number,
        required:[true,"Product price required"]
    },
    brand:{
        type:String,
        required:[true,"Product brand required"]
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

//create model
export const ProductModel=model("product",productSchema)