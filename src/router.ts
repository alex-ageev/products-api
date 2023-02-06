import {Router, Request, Response } from "express";
import ProductModel from "./ProductModel";

const router = Router()

router.post("/products", async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, description, image } = req.body;
    const product = await ProductModel.create({ name, price, quantity, description, image })
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: 'Failed to create product.', error })
  }
});
// router.get("/products", ProductController.getAll());
// router.get("/products/:id");
// router.put("/products/:id");
// router.delete("/products/:id");


export default router;