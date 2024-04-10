import { prisma } from "@/lib";
import React from "react";
import { Label, Select } from "../UI";
import { filterProducts } from "@/actions";
import { ProductCategory, ProductFilterValues } from "@/types";
import { FormSubmitButton } from "../Buttons/FormSubmitButton";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";

export interface ProductsFilterSidebarProps {
  defaultValues: ProductFilterValues;
}

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
            <Label htmlFor="query">Buscar</Label>
            <Input
              type="text"
              name="query"
              placeholder="Título, descripción, categoría..."
              labelPlacement="outside"
              variant="bordered"
              className="w-full"
              defaultValue={defaultValues.query}
              endContent={
                <SearchIcon
                  size={20}
                  color="#FFA500"
                />
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="category">Categoría</Label>
            <Select
              name="category"
              id="category"
              defaultValue={defaultValues.category || ""}
            >
              <option value="">Todas las categorías</option>
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
            <Label htmlFor="location">Ubicación</Label>
            <Select
              name="location"
              id="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">Todas las ubicaciones</option>
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
