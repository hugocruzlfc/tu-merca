import React from "react";
import { ProductFilterValues, prisma } from "@/lib";
import Link from "next/link";
import { ProductsList } from "../ProductsList";
import { buildFilters } from "@/utils";
import { ProductsNotFound } from "../ProductsNotFound";

export interface ProductsResultProps {
  filterValues: ProductFilterValues;
  //   page?: number;
}

export const ProductsResult: React.FC<ProductsResultProps> = async ({
  filterValues,
}) => {
  const where = buildFilters(filterValues);
  const productsPromise = prisma.product.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    // take: 10,
    // skip: page ? (page - 1) * 10 : 0,
  });

  const countPromise = prisma.product.count({ where });

  const [products, totalResults] = await Promise.all([
    productsPromise,
    countPromise,
  ]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
          >
            <ProductsList product={product} />
          </Link>
        ))}

        {/* {products.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / productsPerPage)}
          filterValues={filterValues}
        />
      )} */}
      </div>

      {products.length === 0 && (
        <div className="flex flex-col w-full sm:min-h-80 sm:mb-24 mb-16">
          <ProductsNotFound />
        </div>
      )}
    </>
  );
};
