import { useState } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./Employee.scss";
import type { EmployeeListType } from "./EmployeeList/EmployeeList.types";
import { useEmployeeList } from "../../data/employee.hook";

export default function Employee() {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeListType | null>(null);

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
