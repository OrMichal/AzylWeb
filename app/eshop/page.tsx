import { ProductGrid } from "@/server-components/Product-grid/product-grid";

export default function Eshop() {
  return (
    <div className="flex flex-col gap-10 pt-10 pb-10 w-full items-center">
      <span>Ehop</span>
      <ProductGrid />
    </div>
  );
}
