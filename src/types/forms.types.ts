import {
  forgetPasswordFormValidationsSchema,
  loginFormValidationsSchema,
  registerFormValidationsSchema,
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
