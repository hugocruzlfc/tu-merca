import React from "react";
import { Input } from "@nextui-org/react";
import { Search as SearchIcon } from "lucide-react";
import { filterProducts } from "@/actions";

export const Search: React.FC = () => {
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("query", e.target.value);
    await filterProducts(formData);
  };

  return (
    <Input
      type="text"
      name="query"
      placeholder="Buscar"
      labelPlacement="outside"
      variant="bordered"
      className="w-full"
      defaultValue={""}
      onChange={handleSearch}
      endContent={
        <SearchIcon
          size={20}
          color="#FFA500"
        />
      }
    />
  );
};
