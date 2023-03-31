import { Router } from 'express'
import { getCategoryController } from '../controllers/category.controller.js'

const categoryRoutes = Router()

categoryRoutes.get("/categories", getCategoryController)

export default categoryRoutes