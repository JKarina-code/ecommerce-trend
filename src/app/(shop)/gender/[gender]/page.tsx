export const revalidate = 60;
import { ProductGrid, Title, Pagination } from "@/components";
import { getPaginationProducts } from "@/actions/product/product-pagination";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  params: { gender: string };
  searchParams: {
    page?: string;
  };
}

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages, currentPage } = await getPaginationProducts({
    gender: gender as Gender,
    page,
  });
  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "men",
    women: "women",
    kid: "kid",
    unisex: "unisex",
  };
  return (
    <>
      <Title
        title={`Articles of ${labels[gender]}`}
        subtitle="All the products"
        className="mb-2"
      />
      <ProductGrid products={products} />

      <Pagination totalPages={ totalPages }  />
    </>
  );
}
