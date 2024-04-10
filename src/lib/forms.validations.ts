import { z } from "zod";

export const loginFormValidationsSchema = z.object({
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres!"),
  email: z.string().email({ message: "Correo elctrónico no válido!" }),
});

export const registerFormValidationsSchema = z.object({
  username: z.string().min(9, "Escriba su nombre y apellidos completos!"),
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres!"),
  email: z.string().email({ message: "Correo elctrónico no válido!" }),
});

export const forgetPasswordFormValidationsSchema = z.object({
  email: z.string().email({ message: "Correo elctrónico no válido!" }),
});

export const updatePasswordFormValidationsSchema = loginFormValidationsSchema
  .extend({
    confirmPassword: z
      .string()
      .min(5, "La contraseña debe tener al menos 5 caracteres!"),
    token: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden!",
    path: ["confirmPassword"],
  });
