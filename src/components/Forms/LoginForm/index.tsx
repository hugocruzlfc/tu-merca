"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { LoginFormInitialValues } from "@/constants";
import { loginFormValidationsSchema } from "@/utils";
import { Input } from "@/components/Input";
import { Eye, EyeOff } from "lucide-react";

export const LoginForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignIn = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      // Manejar el error de inicio de sesión
      console.error(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Iniciar sesión</p>
        <Formik
          initialValues={LoginFormInitialValues}
          validationSchema={loginFormValidationsSchema}
          onSubmit={(values) => handleSignIn(values)}
        >
          {() => (
            <Form noValidate>
              <CardBody className="px-10">
                <div className="mb-2 mt-1">
                  <Input
                    className="mt-2"
                    type="email"
                    name="email"
                    placeholder="tu-correo@.domain.com"
                    variant="bordered"
                    size="sm"
                    label="Correo electrónico"
                    labelPlacement="outside"
                  />
                </div>
                <div className="mb-2 mt-1">
                  <Input
                    className="mt-4"
                    type={isVisible ? "text" : "password"}
                    name="password"
                    placeholder="tu-contraseña"
                    variant="bordered"
                    size="sm"
                    label="Contraseña"
                    labelPlacement="outside"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <Eye strokeWidth={1.5} />
                        ) : (
                          <EyeOff strokeWidth={1.5} />
                        )}
                      </button>
                    }
                  />
                </div>

                <Button
                  color="primary"
                  type="submit"
                  className="w-full mt-5 mb-5"
                >
                  Continuar
                </Button>
              </CardBody>
            </Form>
          )}
        </Formik>

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
    </>
  );
};
