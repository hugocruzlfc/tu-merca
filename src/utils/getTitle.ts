import { ProductFilterValues } from "@/types";

export function getTitle(filterValues: ProductFilterValues) {
  const { query, location, category } = filterValues;

  const titlePrefix = query
    ? `Productos ${query}`
    : category
    ? `Productos de ${category}`
    : "Todos los productos";

  const titleSuffix = location ? ` en ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}
