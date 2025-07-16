import { IProduct, ProductModel } from "@/models/product/product.model";

export async function* GetAllProducts(): AsyncGenerator<IProduct> {
  const prods: IProduct[] = await ProductModel.find();

  if (!prods) {
    throw new Error("Could not get products");
  }

  for (const prod of prods) {
    yield prod;
  }
}
