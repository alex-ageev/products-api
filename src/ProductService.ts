import ProductModel from "./ProductModel";

class ProductService {
  //product == req.body
  async create(product: any) {
    const { name, price, quantity, description, image } = product;
    const createdProduct = await ProductModel.create({
      name,
      price,
      quantity,
      description,
      image,
    });
    return createdProduct;
  }
  async getAll() {
    const products = await ProductModel.find();
    return products;
  }
  async getOne(id: string) {
    const product = await ProductModel.findById(id);
    return product;
  }
  async update(id: string, product: any) {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!updatedProduct) {
      throw new Error("Product not found.");
    }
    return updatedProduct;
  }
  async delete(id: string) {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw new Error("Product not found.");
    }

    return deletedProduct;
  }
}

export default new ProductService();
