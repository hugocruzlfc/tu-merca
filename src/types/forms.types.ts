import {
  forgetPasswordFormValidationsSchema,
  loginFormValidationsSchema,
  registerFormValidationsSchema,
  updatePasswordFormValidationsSchema,
} from "@/lib";
import { z } from "zod";

export type TLoginFormValidationsSchema = z.infer<
  typeof loginFormValidationsSchema
>;

export type TRegisterFormValidationsSchema = z.infer<
  typeof registerFormValidationsSchema
>;

export type TForgetPasswordFormValidationsSchema = z.infer<
  typeof forgetPasswordFormValidationsSchema
>;

export type TUpdatePasswordFormValidationsSchema = z.infer<
  typeof updatePasswordFormValidationsSchema
>;
