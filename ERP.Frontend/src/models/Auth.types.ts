import { z } from "zod";

export type AuthRequest = {
  email: string;
  password: string
};

export interface AuthResponse {
  token: string;
  expiresIn: number; 
  userId: string;
  userName: string;
  role: string;
}

export const loginSchema = z.object({
  email: z.string(), //.email("Incorect email"),
  password: z.string() //.min(6, "Password too short"),
});

export type LoginFormData = z.infer<typeof loginSchema>;