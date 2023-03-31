import express from "express";
import productRoutes from "./router/products.routes.js";
import userRoutes from "./router/user.routes.js";
import categoryRoutes from "./router/category.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productRoutes)
app.use(userRoutes)
app.use(categoryRoutes)

app.listen(3000);
