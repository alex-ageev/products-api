import { Router, Request, Response } from "express";
import ProductModel from "./ProductModel";
import ProductController from "./ProductController";

const router = Router();

// creates product
router.post("/products", ProductController.create);
// get all products
router.get("/products", ProductController.getAll);
// get product by ID
router.get("/products/:id", ProductController.getOne);
// update product by ID
router.put("/products/:id", ProductController.update);
// delete product by ID
router.delete("/products/:id", ProductController.delete);

export default router;
