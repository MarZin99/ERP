import axios from "axios";
import type { EmployeeFormType } from "../pages/Employees/EmployeeForm/EmployeeForm.types";

const API_BASE_URL = "https://localhost:7075/api/employee";

export const fetchEmployeesToList = async () => {
  const response = await axios.get(`${API_BASE_URL}/list`);
  return response.data;
};

export const fetchEmployeeById = async (id: string): Promise<EmployeeFormType> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};