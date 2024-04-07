import { H1, ProductsResult } from "@/components";
import ProductsFilterSidebar from "@/components/ProductsFilterSidebar";
import { ProductFilterValues } from "@/lib";
import { SearchParams } from "@/types";
import { getTitle } from "@/utils";
import { Metadata } from "next";

interface PageProps {
  searchParams: SearchParams;
}

export function generateMetadata({
  searchParams: { query, location, category },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      query,
      category,
      location,
    })} | Tu Merca`,
  };
}

export default async function Home({
  searchParams: { query, location, category, page },
}: PageProps) {
  const filterValues: ProductFilterValues = {
    query,
    location,
    category,
  };

  return (
    <main className="m-auto my-10 space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Encuentra tu producto!</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <ProductsFilterSidebar defaultValues={filterValues} />
        <ProductsResult filterValues={filterValues} />
      </section>
    </main>
  );
}
