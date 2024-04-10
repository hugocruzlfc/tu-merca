"use server";

import {
  prisma,
  updatePasswordFormValidationsSchema,
  verifyForgetToken,
} from "@/lib";
import { hash } from "bcryptjs";

export async function updatePassword(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { email, password, confirmPassword, token } =
    updatePasswordFormValidationsSchema.parse(values);

  if (password !== confirmPassword) {
    return { error: "Las contraseñas no coinciden!" };
  }

  const { userId } = verifyForgetToken(token!, email);

  const userFound = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userFound) {
    return { error: "Usuario no encontrado!" };
  }

  if (userFound.email !== email) {
    return { error: "El correo electrónico no coincide!" };
  }

  const hashedPassword = await hash(password, 12);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });

  return { message: "Contraseña actualizada con éxito!" };
}
