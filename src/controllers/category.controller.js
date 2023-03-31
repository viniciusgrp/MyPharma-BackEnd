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

export const createCategoryController = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        return res.status(201).send(category)
    } catch (err) {
        console.log(err)
    }
}

export const updateCategoryController = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findById(id)
        if (!category){
            return res.status(404).send({"error": "Category not found!"})
        }
        await Category.updateOne({_id: id}, req.body)
        const updated = await Category.findById(id)
        return res.send(updated)
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const id = req.params.id
        const find = await Category.findById(id)
        if (!find){
            return res.status(404).send({"error": "Category not found!"})
        }
        await Category.deleteOne({_id: id})
        return res.status(200)
    } catch (error) {
        console.log(error)
    }
}