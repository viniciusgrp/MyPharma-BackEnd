import { Router } from 'express'
import { createProductController, deleteProductController, getProductsController, updateProductsController } from '../controllers/product.controller.js'

const productRoutes = Router()

productRoutes.post('/products', createProductController)
productRoutes.get('/products', getProductsController)
productRoutes.patch('/products/:id', updateProductsController)
productRoutes.delete('/products/:id', deleteProductController)

export default productRoutes