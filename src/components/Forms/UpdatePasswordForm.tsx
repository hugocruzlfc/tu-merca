"use client";
import React, { useState } from "react";
import { Card, CardBody, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoutesPage, TUpdatePasswordFormValidationsSchema } from "@/types";
import { updatePasswordFormValidationsSchema } from "@/lib";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../UI";
import { updatePassword } from "@/actions";
import { showToast } from "../CustomToast";
import { useRouter } from "next/navigation";

export interface UpdatePasswordFormProps {
  token?: string;
}

export const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({
  token,
}) => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUpdatePasswordFormValidationsSchema>({
    resolver: zodResolver(updatePasswordFormValidationsSchema),
  });

  const onSubmit = async (data: TUpdatePasswordFormValidationsSchema) => {
    const formData = new FormData();
    formData.append("token", token!);

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value.toString());
      }
    });

    try {
      const { error, message } = await updatePassword(formData);
      if (error) {
        showToast({ type: "error", message: error });
      } else {
        showToast({
          type: "success",
          message: `${message}`,
        });
      }
      router.push(RoutesPage.LOGIN);
    } catch (error) {
      showToast({
        type: "error",
        message: "Algo salió mal, por favor intenta nuevamente.",
      });
    }
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  return (
    <Card className="flex px-2">
      <p className="text-lg mt-5 mb-5">Actualizar contraseña</p>
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
              type={isPasswordVisible ? "text" : "password"}
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
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
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
          <div>
            <Input
              {...register("confirmPassword")}
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confimar contraseña"
              className="py-2 rounded"
              variant="bordered"
              size="sm"
              label="Confirmar Contraseña"
              labelPlacement="outside"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {isConfirmPasswordVisible ? (
                    <Eye strokeWidth={1.5} />
                  ) : (
                    <EyeOff strokeWidth={1.5} />
                  )}
                </button>
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
          <Button
            disabled={isSubmitting}
            color="primary"
            type="submit"
            className="w-full mt-5 mb-5 text-white"
          >
            Actualizar
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
