import { useEffect, useState } from "react";
import type { EmployeeFormType } from "../pages/Employees/EmployeeForm/EmployeeForm.types";
import { fetchEmployeeById, fetchEmployeesToList } from "../services/employee.service";
import type { EmployeeListType } from "../pages/Employees/EmployeeList/EmployeeList.types";

export const useEmployee = (id: string) => {
  const [employee, setEmployee] = useState<EmployeeFormType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchEmployeeById(id);
        setEmployee(data);
      } catch (err) {
        setError("Cannot get employee data:" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { employee, loading, error };
};

export const useEmployeeList = () => {
    const [employees, setEmployees] = useState<EmployeeListType[] | null>(null);
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