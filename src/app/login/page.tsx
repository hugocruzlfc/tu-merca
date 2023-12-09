import { NextPage } from "next";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import { Brand } from "@/components";

const LoginPage: NextPage = () => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center">
      <div className="mt-10 mb-10 flex justify-center">
        <Brand />
      </div>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Iniciar sesión</p>
        <p>Dirección de e-mail o número de teléfono móvil</p>
        <CardBody className="px-10">
          <Input
            className="mb-2 mt-1"
            type="email"
            placeholder="your-email@.domain.com"
            variant="bordered"
            size="sm"
          />
          <Button color="primary">Continuar</Button>
        </CardBody>

        <CardFooter>
          <p className="text-start">
            Al identidicarte, aceptas nuestras
            <span className="text-sky-600 mx-1 cursor-pointer hover:underline">
              Condiciones de uso y venta.
            </span>
            Consulta nuestro Aviso de privacidad y nuestro{" "}
            <span className="text-sky-600 mx-1 cursor-pointer hover:underline">
              {" "}
              Aviso de Cookies y Aviso sobre publicidad basada en los intereses
              del usuario.
            </span>
          </p>
        </CardFooter>
      </Card>

      <div className="flex space-between justify-center items-center mt-10 mb-10">
        <Divider className="w-4/12" />
        <p className="mx-5">¿Eres nuevo?</p>
        <Divider className="w-4/12" />
      </div>
      <Button
        className="border-2 border-slate-300 w-full"
        href="/register"
        as={Link}
      >
        Crea tu cuenta de TuMerca
      </Button>
    </div>
  );
};

export default LoginPage;
