import * as Yup from "yup";

export const loginFormValidationsSchema = Yup.object({
  password: Yup.string().required("La contraseña es requerida!"),
  email: Yup.string()
    .email("Correo no válido!")
    .required("El correo es requerido!"),
});
