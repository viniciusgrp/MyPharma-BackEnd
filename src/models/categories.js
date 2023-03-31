import mongoose from "../database/index.js";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
