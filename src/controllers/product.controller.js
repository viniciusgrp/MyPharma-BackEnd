import Product from "../models/products";

export const createProductController = async (req, res) => {
  const productInfos = req.body;
  try {
    const product = await Product.create(productInfos);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(400).send({
      error: err.errors,
    });
  }
};

export const deleteProductController = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ error: "Product not found!" });
    }
    await Product.deleteOne({ _id: productId });
    return res.status(200).send();
  } catch (err) {
    return res.send({ error: err.errors });
  }
};

export const updateProductsController = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).send({"error": "Product not found!"})
        }
        await Product.updateOne({ _id: id }, req.body)
        const productUpdated = await Product.findById(id)
        return res.send(productUpdated)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}

export const getProductsController = async (req, res) => {
    try {
        const products = await Product.find()
        return res.send(products)
    } catch (err) {
        return res.status(400).send({"error": err.errors})
    }
}