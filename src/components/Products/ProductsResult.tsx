import React from "react";
import { prisma } from "@/lib";
import Link from "next/link";
import { ProductsList } from "./ProductsList";
import { buildFilters } from "@/utils";
import { ProductsNotFound } from "./ProductsNotFound";
import Pagination from "../Pagination";
import { ProductFilterValues, RoutesPage } from "@/types";

export interface ProductsResultProps {
  filterValues: ProductFilterValues;
  page?: number;
}

export const ProductsResult: React.FC<ProductsResultProps> = async ({
  filterValues,
  page = 1,
}) => {
  const productsPerPage = 6;
  const skip = (page - 1) * productsPerPage;
  const where = buildFilters(filterValues);
  const productsPromise = prisma.product.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    take: productsPerPage,
    skip,
  });

  const countPromise = prisma.product.count({ where });

  const [products, totalResults] = await Promise.all([
    productsPromise,
    countPromise,
  ]);

  return (
    <>
      {products.length === 0 ? (
        <div className="flex flex-col w-full sm:min-h-80 sm:mb-24 mb-16">
          <ProductsNotFound />
        </div>
      ) : (
        <div className="grow space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`${RoutesPage.PRODUCTS}/${product.slug}`}
              >
                <ProductsList product={product} />
              </Link>
            ))}
          </div>

          <div className="py-5 px-10">
            {products.length > 0 && (
              <Pagination
                currentPage={page}
                totalPages={Math.ceil(totalResults / productsPerPage)}
                filterValues={filterValues}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
