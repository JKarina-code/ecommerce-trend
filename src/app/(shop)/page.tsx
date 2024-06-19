import { Title, ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Store" subtitle="All the products" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
