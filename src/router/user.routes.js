import { Router } from 'express'
import { createUserController, deleteUserController, getSpecificUserController, getUserController, updateUserController } from '../controllers/user.controller.js'

const userRoutes = Router()

userRoutes.post("/users", createUserController)
userRoutes.get("/users", getUserController)
userRoutes.get("/users/:id", getSpecificUserController)
userRoutes.patch("/users/:id", updateUserController)
userRoutes.delete("/users/:id", deleteUserController)

export default userRoutes