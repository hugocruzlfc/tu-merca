"use client";

import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/Icons";
import { RegisterFormInitialValues } from "@/constants";
import { registerFormValidationsSchema } from "@/utils";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { createUser } from "@/actions";

export const RegisterForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleRegister = async (values: {
    username: string;
    email: string;
    password: string;
  }) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value.toString());
      }
    });

    try {
      await createUser(formData);
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Crear Cuenta</p>
        <Formik
          initialValues={RegisterFormInitialValues}
          validationSchema={registerFormValidationsSchema}
          onSubmit={(values) => handleRegister(values)}
        >
          {() => (
            <Form noValidate>
              <CardBody className="px-10">
                <div className="mb-2">
                  <Input
                    type="text"
                    name="username"
                    placeholder="Tu nombre y apellidos"
                    variant="bordered"
                    size="sm"
                    label="Nombre y Apellidos"
                    labelPlacement="outside"
                  />
                </div>
                <div className="mb-2 mt-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="tu-correo@.domain.com"
                    variant="bordered"
                    size="sm"
                    label="Correo Electrónico"
                    labelPlacement="outside"
                  />
                </div>
                <div className="mb-2 mt-1">
                  <Input
                    type={isVisible ? "text" : "password"}
                    name="password"
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
                    label="Contraseña"
                    labelPlacement="outside"
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
            Al crear una cuenta, acepta nuestras
            <span className="text-sky-600 mx-1 cursor-pointer hover:underline">
              Condiciones de uso
            </span>
            y nuestro
            <span className="text-sky-600 mx-1 cursor-pointer hover:underline">
              Aviso de privacidad
            </span>
          </p>
        </CardFooter>
      </Card>

      <div className="flex space-between justify-center items-center mt-10 mb-10">
        <Divider className="w-3/12" />
        <p className="mx-5">¿Ya tienes una cuenta?</p>
        <Divider className="w-3/12" />
      </div>
      <Button
        className="border-2 border-slate-300 w-full"
        href="/login"
        as={Link}
      >
        Iniciar sesión
      </Button>
    </>
  );
};
