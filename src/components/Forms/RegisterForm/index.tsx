"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import { createUser } from "@/actions";
import { Eye, EyeOff } from "lucide-react";
import {
  TRegisterFormValidationsSchema,
  registerFormValidationsSchema,
} from "@/lib";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterFormValidationsSchema>({
    resolver: zodResolver(registerFormValidationsSchema),
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (values: TRegisterFormValidationsSchema) => {
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
        <CardBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            <div className="mb-2">
              <Input
                type="text"
                {...register("username")}
                placeholder="Tu nombre y apellidos"
                variant="bordered"
                size="sm"
                label="Nombre y Apellidos"
                labelPlacement="outside"
                className="py-2 rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-xs">{`${errors.username.message}`}</p>
              )}
            </div>
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="tu-correo@.domain.com"
                className="py-2 rounded"
                variant="bordered"
                size="sm"
                label="Correo electrónico"
                labelPlacement="outside"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{`${errors.email.message}`}</p>
              )}
            </div>
            <div>
              <Input
                {...register("password")}
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                className="py-2 rounded"
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
              {errors.password && (
                <p className="text-red-500 text-xs">{`${errors.password.message}`}</p>
              )}
            </div>

            <Button
              disabled={isSubmitting}
              color="primary"
              type="submit"
              className="w-full mt-5 mb-5"
            >
              Continuar
            </Button>
          </form>
        </CardBody>

        <CardFooter className="text-sm">
          <p className="text-center">
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
