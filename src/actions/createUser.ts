"use server";

import { prisma } from "@/lib";
import { registerFormValidationsSchema } from "@/utils";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

export async function createUser(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { username, email, password } =
    registerFormValidationsSchema.cast(values);

  const hashedPassword = await hash(password, 12);

  await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  redirect("/profile");
}
