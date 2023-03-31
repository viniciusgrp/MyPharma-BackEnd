import mongoose from "../database";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quantityStock: {
        type: Number,
        required: true
    },
    discont: {
        type: Boolean,
        default: false
    },
    discontPrice: {
        type: Number,
        required: false
    }
})

const Product = mongoose.model("Product", ProductSchema)

export default Product