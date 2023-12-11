"use client";
import { useState } from "react";
import { NextPage } from "next";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
} from "@nextui-org/react";
import { Brand } from "@/components";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(result);

    if (result?.error) {
      // Manejar el error de inicio de sesión
      console.error(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center">
      <div className="mt-10 mb-10 flex justify-center">
        <Brand />
      </div>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Iniciar sesión</p>
        <p>Dirección de e-mail o número de teléfono móvil</p>
        <CardBody className="px-10">
          <form onSubmit={handleSignIn}>
            <Input
              className="mb-2 mt-1"
              type="email"
              placeholder="tu-correo@.domain.com"
              variant="bordered"
              size="sm"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="mb-2 mt-1"
              type={isVisible ? "text" : "password"}
              placeholder="tu-contraseña"
              variant="bordered"
              size="sm"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="primary"
              type="submit"
              className="w-full mt-5 mb-5"
            >
              Continuar
            </Button>
          </form>
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
