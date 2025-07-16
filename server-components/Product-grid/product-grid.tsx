import { IProduct } from "@/models/product/product.model";
import { GetGeneratorArray } from "@/services/core-service/core.service";
import { GetAllProducts } from "@/services/product-service/product.service";
import { ProductCard } from "../Product-card/product-card";

export async function ProductGrid() {
  const productGenerator = GetAllProducts();
  const products: IProduct[] = await GetGeneratorArray(productGenerator);

  return (
    <div className="grid grid-cols-6 w-full p-5">
      {products.map((p) => (
        <ProductCard product={p} />
      ))}
    </div>
  );
}
