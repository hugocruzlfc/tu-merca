import React from "react";
import { Input } from "@nextui-org/react";
import { Search as SearchIcon } from "lucide-react";

export interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Input
      type="text"
      placeholder="Buscar"
      labelPlacement="outside"
      variant="bordered"
      className="w-full"
      endContent={
        <SearchIcon
          size={20}
          color="#FFA500"
        />
      }
    />
  );
};
