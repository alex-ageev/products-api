
import ProductModel from "./ProductModel";
import ProductService from "./ProductService";
import { NextFunction, Request, Response } from "express";

class ProductController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await ProductService.create(req.body)
      res.status(201).send(product);
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Failed to create product.", error });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getAll()
      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to retrive products.", error });
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.getOne(id);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to retrive product.", error });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.update(id, req.body);
      res.status(201).send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to update product.", error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.delete(id);
      console.log(product);
      res.status(200).send({message: "Product deleted"});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Failed to delete product.", error });
    }
  }
}

export default new ProductController();