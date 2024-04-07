import { ProductFilterValues, prisma } from "@/lib";
import React from "react";
import { Select } from "../UI";
import { filterProducts } from "@/actions";
import { ProductCategory } from "@/types";
import { FormSubmitButton } from "../Buttons";

export interface ProductsFilterSidebarProps {
  defaultValues: ProductFilterValues;
}

// export const ProductsFilterSidebar: React.FC<
//   ProductsFilterSidebarProps
//   > = async ({ defaultValues }) =>

export default async function ProductsFilterSidebar({
  defaultValues,
}: ProductsFilterSidebarProps) {
  const distinctLocations = (await prisma.product
    .findMany({
      where: {
        approved: true,
      },
      select: {
        location: true,
      },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean)
    )) as string[];

  return (
    <aside className="sticky top-0 h-fit rounded-[14px] border bg-background p-4 md:w-[400px]">
      <form
        action={filterProducts}
        key={JSON.stringify(defaultValues)}
      >
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Select
              name="category"
              id="category"
              defaultValue={defaultValues.category || ""}
            >
              <option value="">Categorías</option>
              {Object.values(ProductCategory).map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Select
              name="location"
              id="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">Ubicación</option>
              {distinctLocations.map((location) => (
                <option
                  key={location}
                  value={location}
                >
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <FormSubmitButton className="w-full">
            Filtrar productos
          </FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}