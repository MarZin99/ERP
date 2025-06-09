import "./EmployeeList.scss";
import type { EmployeeListProps } from "../../../models/EmployeeList.types";


export default function EmployeeList({ employees, onSelect, selected }: EmployeeListProps) {
  return (
    <div className="employee-list-scroll">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              className={selected?.id === emp.id ? "selected" : ""}
              onClick={() => onSelect(emp)}
            >
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.positionName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
