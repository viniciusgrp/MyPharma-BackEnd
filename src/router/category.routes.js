import { Router } from 'express'
import { createCategoryController, deleteCategoryController, getCategoryController, updateCategoryController } from '../controllers/category.controller.js'

const categoryRoutes = Router()

categoryRoutes.get("/categories", getCategoryController)
categoryRoutes.post("/categories", createCategoryController)
categoryRoutes.patch("/categories/:id", updateCategoryController)
categoryRoutes.delete("/categories/:id", deleteCategoryController)

export default categoryRoutes