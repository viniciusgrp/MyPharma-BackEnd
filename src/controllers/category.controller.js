import Category from "../models/categories.js"

export const getCategoryController = async (req, res) => {
    try {
        const categories = await Category.find()
        return res.send(categories)
    } catch (err) {
        console.log(err)
        return res.status(400).send({"error": err.errors})
    }
}