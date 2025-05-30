import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./Employee.scss";
import type { EmployeeListType } from "./EmployeeList/EmployeeList.types";

export default function Employee() {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeListType | null>(null);
  const [employees, setEmployees] = useState<EmployeeListType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://localhost:7075/api/Employee/list");
        setEmployees(response.data);
      } catch (err) {
        setError("Nie udało się pobrać danych.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className={`employee-container ${selectedEmployee ? "split" : ""}`}>
      <div className="employee-list">
        {loading ? (
          <p>Ładowanie...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <EmployeeList
            employees={employees}
            onSelect={setSelectedEmployee}
            selected={selectedEmployee}
          />
        )}
      </div>
      {selectedEmployee && (
        <div className="employee-form">
          <EmployeeForm employeeId={selectedEmployee.id} />
        </div>
      )}
    </div>
  );
}
