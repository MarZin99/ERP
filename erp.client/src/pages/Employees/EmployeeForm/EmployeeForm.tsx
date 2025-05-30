
import { useEffect, useState } from "react";
import "./EmployeeForm.scss";
import type { EmployeeFormProps, EmployeeFormType } from "./EmployeeForm.types";
import axios from "axios";

export default function EmployeeForm({ employeeId }: EmployeeFormProps) {

  const [employee, setEmployee] = useState<EmployeeFormType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://localhost:7075/api/Employee/" + employeeId);
        setEmployee(response.data);
      } catch (err) {
        setError("Nie udało się pobrać danych.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [employeeId]);
  
  return (
    <div className="employee-form-container">
     {loading ? (
      <div>Loading</div>
    ) : error ? (
      <div>{error}</div>
    ) : employee ? (
      <>
        <h2>Dane pracownika</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Name:</strong> {employee.firstName}</p>
        <p><strong>Last name:</strong> {employee.lastName}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Hire date:</strong> {new Date(employee.hireDate).toLocaleDateString()}</p>
      </>
    ) : (
      <div>Brak danych pracownika.</div>
    )}

     
    </div>
  );
}
