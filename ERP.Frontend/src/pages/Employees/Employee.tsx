import { useState } from "react";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import "./Employee.scss";
import { useEmployeeList } from "../../_data/employee.hook";
import type { EmployeeLite } from "../../models/EmployeeList.types";
import Button from "../../components/Button/Button";

export default function Employee() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);
  const [isCreatingEmployee, setIsCreatingEmployee] = useState<boolean>(false);

  const splitScreen = isCreatingEmployee || selectedEmployeeId ? true : false;

  const { employees, loading, error } = useEmployeeList();

  const addUser = () => {
    setIsCreatingEmployee(true)
    setSelectedEmployeeId(null)
  }

  const selectUser = (user: EmployeeLite) => {
    setIsCreatingEmployee(false);
    setSelectedEmployeeId(user.id);
  }

  return (
    <div className={`employee-container ${splitScreen ? "split" : ""}`}>
      <div className="employee-list">
        <Button text="Add User" onClick={addUser}/>
        {loading ? (
          <p>Ładowanie...</p>
        ) : error ? (
          <p>{error}</p>
        ) : employees && (
          <EmployeeList
            employees={employees}
            onSelect={selectUser}
            selectedID={selectedEmployeeId}
          />
        )}
      </div>
      
        <div className="employee-form">
          {selectedEmployeeId && (<EmployeeForm mode="edit" employeeId={selectedEmployeeId}  /> )}
          {isCreatingEmployee && (<EmployeeForm mode="add" /> )}
        </div>
     
    </div>
  );
}
