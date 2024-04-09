import {
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
