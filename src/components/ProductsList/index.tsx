import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CardHeader,
} from "@nextui-org/react";
import { Product } from "@prisma/client";
import productPlaceHolder from "@/assets/placeholders/no-product-600x400.png";
import Image from "next/image";

export interface ProductsListProps {
  product: Product;
}

export const ProductsList: React.FC<ProductsListProps> = ({ product }) => {
  const { name, price, picture, category } = product;
  return (
    <Card shadow="sm">
      <CardHeader className="flex md:justify-between flex-col md:flex-row text-center md:text-star">
        <b className="text-xs md:text-sm">{name}</b>
        <div className="rounded-full border px-2 py-1 border-primary">
          <p className="text-xs text-preferredColor">{category}</p>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          src={productPlaceHolder}
          alt={name}
          width={600}
          height={400}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="text-default-500">${price}</p>
      </CardFooter>
    </Card>
  );
};
