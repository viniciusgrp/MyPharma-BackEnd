import { Router } from 'express'
import { createProductController, deleteProductController, getProductsByCategorie, getProductsController, updateProductsController } from '../controllers/product.controller.js'

const productRoutes = Router()

productRoutes.post('/products', createProductController)
productRoutes.get('/products', getProductsController)
productRoutes.get('/products/categories/:category', getProductsByCategorie)
productRoutes.patch('/products/:id', updateProductsController)
productRoutes.delete('/products/:id', deleteProductController)

export default productRoutes