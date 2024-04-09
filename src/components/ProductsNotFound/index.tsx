import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const ProductsNotFound: React.FC = () => {
  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible flex justify-start items-center p-5 text-center">
        <h2>
          No se han encontrado productos. Intente ajustar los filtros de
          búsqueda!
        </h2>
      </CardBody>
    </Card>
  );
};
