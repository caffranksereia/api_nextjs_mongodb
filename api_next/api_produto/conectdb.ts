import mongoose from "mongoose";

const {DATABASE_URL} = process.env

export const connect = async () =>{
    const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch(err => console.log(err))
    console.log("mongoose connection established")

    const ProductSchema = new mongoose.Schema({
        product_id :Number,
        product_name: String,
        price: Number,
        sku: String,
        product_to_category: String
    })

    const product = mongoose.models.Product || mongoose.model("Product",ProductSchema)

    return {conn, product}
}