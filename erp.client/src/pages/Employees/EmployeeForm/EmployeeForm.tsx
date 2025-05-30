
import type { EmployeeType } from "../EmployeeList/EmployeeList";
import "./EmployeeForm.scss";

type Props = {
  employee: EmployeeType;
};

export default function EmployeeForm({ employee }: Props) {
  return (
    <div className="employee-form-container">
      <h2>Dane pracownika</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Imię i nazwisko:</strong> {employee.name}</p>
      <p><strong>Stanowisko:</strong> {employee.position}</p>
      <p><strong>Dział:</strong> {employee.department}</p>
      {/* Można dodać więcej danych tutaj */}
    </div>
  );
}
