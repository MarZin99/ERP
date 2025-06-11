import axios from "axios";
import type { AuthRequest } from "../models/Auth.types";


const API_BASE_URL = "https://localhost:7075/api/auth";

export const fetchAuth = async (data: AuthRequest) => {
  const response = await axios.post(`${API_BASE_URL}/login`, data);
 const result = response.data;

   if (!result.isSuccess) {
    throw new Error(result.error?.message || "Błąd logowania");
  }
  return response.data;
};


