import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

// console.log(process.env.MONGO_URI);

router.put("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

export default router;
