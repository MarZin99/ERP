import { useState } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./Employee.scss";
import { useEmployeeList } from "../../_data/employee.hook";
import type { EmployeeLite } from "../../models/EmployeeList.types";

export default function Employee() {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeLite | null>(null);

  const { employees, loading, error } = useEmployeeList();

  return (
    <div className={`employee-container ${selectedEmployee ? "split" : ""}`}>
      <div className="employee-list">
        {loading ? (
          <p>Ładowanie...</p>
        ) : error ? (
          <p>{error}</p>
        ) : employees && (
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
