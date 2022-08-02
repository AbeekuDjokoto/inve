import { Router } from "express";
import { validateProduct } from '../middleware/products.js'
import { addProduct } from "../controllers/products.js"
const router = Router();

router.post("/products", validateProduct, addProduct);

export default router;
