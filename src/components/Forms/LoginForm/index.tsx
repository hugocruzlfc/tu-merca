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
import { loginFormValidationsSchema } from "@/lib";
import { TLoginFormValidationsSchema } from "@/types";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/react";
import { showToast } from "@/components";

export const LoginForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginFormValidationsSchema>({
    resolver: zodResolver(loginFormValidationsSchema),
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (values: TLoginFormValidationsSchema) => {
    const { email, password } = values;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      showToast({ type: "error", message: result.error });
    } else {
      reset();
      router.push("/");
      router.refresh();
    }
  };

  return (
    <>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Iniciar sesión</p>
        <CardBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
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
