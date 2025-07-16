import {
  IProductType,
  ProductTypeModel,
} from "@/models/productType/productType.model";

export async function* GetAllProductTypes(): AsyncGenerator<IProductType> {
  const prodTypes: IProductType[] = await ProductTypeModel.find();

  if (!prodTypes) {
    throw new Error("Could not get product types");
  }

  for (const prod of prodTypes) {
    yield prod;
  }
}
