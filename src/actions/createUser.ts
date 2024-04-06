"use server";

import { prisma } from "@/lib";
import { registerFormValidationsSchema } from "@/lib";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

export async function createUser(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { username, email, password } =
    registerFormValidationsSchema.parse(values);

  const hashedPassword = await hash(password, 12);

  const result = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  if (result) {
    redirect("/login");
  }
}
