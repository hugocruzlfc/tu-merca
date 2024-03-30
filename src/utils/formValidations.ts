import * as Yup from "yup";

export const loginFormValidationsSchema = Yup.object({
  password: Yup.string().required("La contraseña es requerida!"),
  email: Yup.string()
    .email("Correo no válido!")
    .required("El correo es requerido!"),
});

export const registerFormValidationsSchema = Yup.object({
  username: Yup.string().required("Nombre y apellidos requeridos!"),
  email: Yup.string()
    .email("Correo no válido!")
    .required("El correo es requerido!"),
  password: Yup.string().required("La contraseña es requerida!"),
});
