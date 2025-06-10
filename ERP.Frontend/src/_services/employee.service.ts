import axios from "axios";
import type { AddEmployee, Employee } from "../models/EmployeeForm.types";

const API_BASE_URL = "https://localhost:7075/api/employee";

export const fetchEmployeesToList = async () => {
  const response = await axios.get(`${API_BASE_URL}/list`);
  return response.data.data;
};

export const fetchEmployeeById = async (id: string): Promise<Employee> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data.data;
};

export const createEmployee = async (data: AddEmployee): Promise<Employee> => {
  const response = await axios.post(API_BASE_URL, data);
  return response.data.data;
};

export const updateEmployee = async (data: Employee): Promise<Employee> => {
  console.log(API_BASE_URL, data)
  const response = await axios.put(API_BASE_URL, data);
  return response.data.data;
};