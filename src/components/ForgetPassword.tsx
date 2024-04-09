"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button as NextUIButton,
  Link,
} from "@nextui-org/react";
import React from "react";
import { Button } from "./UI";
import { FormSubmitButton } from "./Buttons/FormSubmitButton";
import { forgetPassword } from "@/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TForgetPasswordFormValidationsSchema } from "@/types";
import { forgetPasswordFormValidationsSchema } from "@/lib";
import { showToast } from "./CustomToast";

export interface ForgetPasswordProps {}

export const ForgetPassword: React.FC<ForgetPasswordProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TForgetPasswordFormValidationsSchema>({
    resolver: zodResolver(forgetPasswordFormValidationsSchema),
  });

  const onSubmit = async (values: TForgetPasswordFormValidationsSchema) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value.toString());
      }
    });

    try {
      const { error, message } = await forgetPassword(formData);
      if (error) {
        showToast({ type: "error", message: error });
      } else {
        showToast({
          type: "success",
          message: `${message} Por favor revise su bandeja de correos!`,
        });
      }
    } catch (error) {
      showToast({
        type: "error",
        message: "Algo salió mal, por favor intenta nuevamente.",
      });
    }
  };
  return (
    <>
      <Card className="flex px-2">
        <p className="text-lg mt-5 mb-5">Iniciar sesión</p>
        <CardBody>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit(onSubmit)}
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
            <Button
              disabled={isSubmitting}
              color="primary"
              type="submit"
              className="w-full mt-5 mb-5"
            >
              Enviar
            </Button>
          </form>
        </CardBody>
      </Card>
      <section>
        <div className="flex space-between justify-center items-center mt-10 mb-10">
          <Divider className="w-4/12" />
          <p className="mx-5">¿Ya la sabes?</p>
          <Divider className="w-4/12" />
        </div>
        <NextUIButton
          className="border-2 border-slate-300 w-full"
          href="/login"
          as={Link}
        >
          Iniciar sesión
        </NextUIButton>
      </section>
    </>
  );
};
