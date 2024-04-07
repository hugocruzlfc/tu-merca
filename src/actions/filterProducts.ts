"use server";

import { productFilterSchema } from "@/lib";
import { redirect } from "next/navigation";

export async function filterProducts(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { query, location, category } = productFilterSchema.parse(values);

  const queryParams = new URLSearchParams({
    ...(query && { query: query.trim() }),
    ...(location && { location }),
    ...(category && { category }),
  });

  redirect(`/?${queryParams.toString()}`);
}
