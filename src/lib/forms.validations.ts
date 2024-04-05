import { z } from "zod";

export const loginFormValidationsSchema = z.object({
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres!"),
  email: z.string().email({ message: "Correo elctrónico no válido!" }),
});

export type TLoginFormValidationsSchema = z.infer<
  typeof loginFormValidationsSchema
>;

export const registerFormValidationsSchema = z.object({
  username: z.string().min(9, "Escriba su nombre y apellidos completos!"),
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres!"),
  email: z.string().email({ message: "Correo elctrónico no válido!" }),
});

export type TRegisterFormValidationsSchema = z.infer<
  typeof registerFormValidationsSchema
>;
