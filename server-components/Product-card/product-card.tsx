import { IProductDTO } from "@/interfaces/product/product";
import { IProduct } from "@/models/product/product.model";
import { GetProductDTO } from "@/services/product-service/product-DTO.service";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  const prodDTO: IProductDTO = GetProductDTO(product);

  return (
    <div className="flex flex-col gap-4">
      <div>{prodDTO.name}</div>
    </div>
  );
}
