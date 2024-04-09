import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Product } from "@prisma/client";
import productPlaceHolder from "@/assets/placeholders/no-product-600x400.png";
import Image from "next/image";
import { Banknote, MapPin } from "lucide-react";

export interface ProductsListProps {
  product: Product;
}

export const ProductsList: React.FC<ProductsListProps> = ({ product }) => {
  const { name, price, picture, category, location } = product;
  return (
    <Card shadow="sm">
      <CardHeader className="flex md:justify-between flex-col md:flex-row flex-wrap">
        <b className="text-xs md:text-sm">{name}</b>
        <div className="rounded-full border px-2 py-1 border-primary">
          <p className="text-xs text-preferredColor text-center">{category}</p>
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
      <CardFooter className="text-small flex flex-wrap flex-col md:flex-row justify-between items-start">
        <p className="flex items-center text-default-500 gap-1.5">
          <Banknote
            size={16}
            className="shrink-0"
          />
          ${price}
        </p>
        <p className="flex items-center gap-1.5 text-xs">
          <MapPin
            size={16}
            className="shrink-0"
          />
          {location}
        </p>
      </CardFooter>
    </Card>
  );
};
