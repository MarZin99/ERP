
import "./EmployeeForm.scss";
import type { EmployeeFormProps } from "./EmployeeForm.types";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { useEmployee } from "../../../data/employee.hook";

export default function EmployeeForm({ employeeId }: EmployeeFormProps) {

  const { employee, loading, error } = useEmployee(employeeId);
  
  return (
    <div className="employee-form-container">
      <div className="management-buttons-container">
        <Button
          text="Save"
          onClick={() => console.log("klik")}
          isLoading={false}
        />
        <Button
          text="Delete"
          onClick={() => console.log("klik")}
          isLoading={false}
        />
      </div>

     {loading ? (
      <div>Loading</div>
    ) : error ? (
      <div>{error}</div>
    ) : employee ? (
      <>
        <h2>Dane pracownika</h2>
        <Input name="ID" label="ID" value={employee.id} style={{maxWidth: "350px"}}></Input>
        <Input name="Name" label="name" value={employee.firstName} style={{maxWidth: "350px"}}></Input>
        <Input name="Last Name" label="lastName" value={employee.lastName} style={{maxWidth: "350px"}}></Input>
        <Input name="Position" label="position" value={employee.position} style={{maxWidth: "350px"}}></Input>
        <Input name="Hire date" label="hireDate" value={new Date(employee.hireDate).toLocaleDateString()} style={{maxWidth: "350px"}}></Input>
      </>
    ) : (
      <div>No data</div>
    )}
    </div>
  );
}
