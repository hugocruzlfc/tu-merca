import React from "react";
import { prisma } from "@/lib";
import Link from "next/link";
import { ProductItem } from "../ProductItem";
import { ProductsList } from "../ProductsList";

export interface ProductsResultProps {
  //   filterValues: JobFilterValues;
  //   page?: number;
}

export const ProductsResult: React.FC<ProductsResultProps> = async ({}) => {
  const productsPromise = prisma.product.findMany({
    where: {
      // name: filterValues.name,
      // location: filterValues.location,
      // category: filterValues.category,
      // type: filterValues.type,
      // salary: filterValues.salary,
    },
    // take: 10,
    // skip: page ? (page - 1) * 10 : 0,
  });

  const [products] = await Promise.all([productsPromise]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
        >
          <ProductsList product={product} />
        </Link>
      ))}
      {products.length === 0 && (
        <p className="m-auto text-center">
          No products found. Try adjusting your search filters
        </p>
      )}
      {/* {products.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(totalResults / productsPerPage)}
          filterValues={filterValues}
        />
      )} */}
    </div>
  );
};
