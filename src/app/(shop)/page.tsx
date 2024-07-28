export const revalidate = 60;
import { Title, ProductGrid, Pagination } from "@/components";
import { getPaginationProducts } from "@/actions/product/product-pagination";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}
export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, totalPages, currentPage } = await getPaginationProducts({
    page,
  });

  if (products.length === 0) {
    redirect("/");
  }
  return (
    <>
      <Title title="Store" subtitle="All the products" className="mb-2" />
      <ProductGrid products={products} />
      
      <Pagination totalPages={totalPages} />
    </>
  );
}
