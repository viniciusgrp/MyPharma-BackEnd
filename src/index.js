import express from "express";
import productRoutes from "./router/products.routes.js";
import userRoutes from "./router/user.routes.js";
import categoryRoutes from "./router/category.routes.js";
import cors from 'cors'

const app = express();

app.use(cors({origin: "http://127.0.0.1:5173"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productRoutes)
app.use(userRoutes)
app.use(categoryRoutes)

app.listen(3000);