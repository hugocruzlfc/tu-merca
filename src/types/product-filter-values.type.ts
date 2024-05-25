import { productFilterSchema } from "@/lib";
import { z } from "zod";

export type ProductFilterValues = z.infer<typeof productFilterSchema>;
