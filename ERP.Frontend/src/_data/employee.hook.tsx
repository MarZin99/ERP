import { useEffect, useState } from "react";
import { emptyEmployee, type AddEmployee, type Employee } from "../models/EmployeeForm.types";
import { createEmployee, fetchEmployeeById, fetchEmployeesToList, updateEmployee } from "../_services/employee.service";
import type { EmployeeLite } from "../models/EmployeeList.types";

export const useEmployee = (id: string | null) => {
  const [employee, setEmployee] = useState<Employee | AddEmployee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if(id) {
        try {
          const data = await fetchEmployeeById(id);
          setEmployee({...data, hireDate: new Date(data.hireDate)});
        } catch (err) {
          setError("Cannot get employee data:" + err);
        } finally {
          setLoading(false);
        }
      }
      else {
        setEmployee(emptyEmployee);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { employee, loading, error };
};

export const useEmployeeList = () => {
    const [employees, setEmployees] = useState<EmployeeLite[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchEmployeesToList();
        setEmployees(data);
      } catch (err) {
          setError("Cannot get employees data:" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    return { employees, loading, error };
}

export const useAddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addEmployee = async (employee: AddEmployee) => {
    setLoading(true);
    setError(null);
    try {
      const data = await createEmployee(employee);
      setLoading(false);
      return data;
    } catch (err) {
      setError("Cannot add employee :" + err);
      setLoading(false);
      throw err;
    }
  };

  const editEmployee = async (employee: Employee) => {
    setLoading(true);
    setError(null);
    try {
      const data = await updateEmployee(employee);
      setLoading(false);
      return data;
    } catch (err) {
      setError("Cannot add employee :" + err);
      setLoading(false);
      throw err;
    }
  };

  return { addEmployee, editEmployee, loading, error };
};