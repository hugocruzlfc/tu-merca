import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../Icons";

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
        <SearchIcon className="pointer-events-none flex-shrink-0 text-preferredColor" />
      }
    />
  );
};
