import z from "zod";

export type Position = {
  id: string;
  title: string;
  baseSalary: number;
}

export const positionSchema = z.object({
  id: z.string(),
  title: z.string(),
  baseSalary: z.number(),
})