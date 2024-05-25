"use server";

import { generateForgetToken, prisma } from "@/lib";
import { forgetPasswordFormValidationsSchema } from "@/lib";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_EMAIL);

export async function forgetPassword(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { email } = forgetPasswordFormValidationsSchema.parse(values);

  const userFound = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userFound) {
    return { error: "Usuario no encontrado!" };
  }

  const token = generateForgetToken(userFound.id, email);

  const { error } = await resend.emails.send({
    from: "TuMerca <onboarding@resend.dev>",
    to: [email],
    subject: "Recuperar contraseña de TuMerca",
    html: `
      <b>Hola 👋 ${userFound.username},
      Este es tu enlace para restablecer la contraseña olvidada. Haz clic en el enlace <br/>
       <p>Click 👉🏻 <a href="http://localhost:3000/update-password?token=${token}">aquí</a> para restablecer tu contraseña!</p>`,
  });

  if (error) {
    return { error: "Error al enviar el correo!" };
  }

  return { message: "Correo enviado con éxito!" };
}
