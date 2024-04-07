import { ProductFilterValues } from "@/lib";
import { Prisma } from "@prisma/client";

export function buildFilters(filterValues: ProductFilterValues) {
  const { query, location, category } = filterValues;

  const searchString = query
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          {
            name: {
              search: searchString,
            },
          },
          {
            description: {
              search: searchString,
            },
          },
          {
            category: {
              search: searchString,
            },
          },
          {
            location: {
              search: searchString,
            },
          },
        ],
      }
    : {};

  const where: Prisma.ProductWhereInput = {
    AND: [
      searchFilter,
      location ? { location } : {},
      category ? { category } : {},
      {
        approved: true,
      },
    ],
  };

  return where;
}
