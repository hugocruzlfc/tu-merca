import { Product } from "@prisma/client";
import React from "react";

export interface ProductsListProps {
  product: Product;
}

export const ProductsList: React.FC<ProductsListProps> = ({ product }) => {
  const { name, description, price, picture, category } = product;
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60 flex-col">
      <div className="flex justify-between">
        <p>{name}</p>
        <p className="border border-orange-400 rounded-full px-1 text-center">
          {category}
        </p>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <p>${price}</p>
    </article>
  );
};
