import { productSchema } from "./validation.js"


export const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error,
    });
  }
  next();
};
