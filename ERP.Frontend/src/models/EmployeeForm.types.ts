import z from "zod";
import { type Position } from "./PositionForm.types";

export type EmployeeFormProps = {
  employeeId: string;
};

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  positionId: string;
  email: string;
  hireDate: Date;
}

export type AddEmployee = {
  firstName: string;
  lastName: string;
  position: Position;
  email: string;
  hireDate: Date;
}

export const employeeSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  positionId: z.string(),
  email: z.string(),
  hireDate: z.date(),
})