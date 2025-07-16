import { IProductDTO } from "@/interfaces/product/product";
import { IProduct } from "@/models/product/product.model";

export function GetProductDTO(prod: IProduct): IProductDTO {
  const res: IProductDTO = {
    productType: prod.productType.toJSON(),
    animalTargetType: prod.animalTargetType.toJSON(),
    name: prod.name,
    originalPrice: prod.originalPrice,
    salePrice: prod.salePrice,
    weight: prod.weight,
    description: prod.description,
  };

  return res;
}
