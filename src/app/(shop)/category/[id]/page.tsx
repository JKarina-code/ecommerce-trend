import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  };
}

const seedProducts = initialData.products;
export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "men",
    women: "women",
    kid: "kid",
    unisex: "unisex",
  };
  return (
    <>
      <Title
        title={`Articles of ${labels[id]}`}
        subtitle="All the products"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
