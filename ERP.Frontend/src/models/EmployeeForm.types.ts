import z from "zod";
import type { Position } from "./PositionForm.types";

export type EmployeeFormProps = {
  employeeId?: string | null;
  mode: "edit" | "add"
};

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  hireDate: Date;
  positionId: string;
  position: Position;
}

export type AddEmployee = {
  firstName: string;
  lastName: string;
  email: string;
  hireDate: Date;
  positionId: string;
}

const positionSchema = z.object({
  id: z.string(),
  baseSalary: z.number(),
  title: z.string()
})

export const editEmployeeSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  positionId: z.string(),
  position: positionSchema,
  email: z.string(),
  hireDate: z.date(),
})

export const addEmployeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  positionId: z.string(),
  email: z.string(),
  hireDate: z.date(),
})



export const emptyEmployee: AddEmployee = {
  firstName: "",
  lastName: "",
  positionId: "",
  email: "",
  hireDate: new Date(),
}