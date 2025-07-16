import { IProductTypeDTO } from "@/interfaces/product-type/product-type";
import { IProductType } from "@/models/productType/productType.model";

export function GetProductTypeDTO(prodType: IProductType): IProductTypeDTO {
  const res: IProductTypeDTO = {
    name: prodType.name,
  };

  return res;
}
