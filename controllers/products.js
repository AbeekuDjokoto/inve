import Products from "../models/Products.js"

export const addProduct = async (req, res) => {
  const { name, quantity, unitPrice, status, category } = req.body;
  const product = await Products.create({
    name,
    quantity,
    unitPrice,
    status,
    category
  });
  res.status(201).send({
    message: `product created successfully`,
    data: product,
  });
};
