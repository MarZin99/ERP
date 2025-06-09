
import "./EmployeeForm.scss";
import { type EmployeeFormProps, type Employee, type AddEmployee, addEmployeeSchema, editEmployeeSchema, emptyEmployee } from "../../../models/EmployeeForm.types";
import Button from "../../../components/Button/Button";
import { useAddEmployee, useEmployee } from "../../../_data/employee.hook";
import { Form } from "../../../components/Form/Form";
import { FormInput } from "../../../components/Form/FormInput/FormInput";
import 'react-datepicker/dist/react-datepicker.css'
import { FormDatePicker } from "../../../components/Form/FormDatePicker/FormDatePicker";
import { usePositions } from "../../../_data/position.hook";
import { FormSelect } from "../../../components/Form/FormSelect/FormSelect";

export default function EmployeeForm({ employeeId = null, mode }: EmployeeFormProps) {

  const { employee, loading, error } = useEmployee(employeeId);
  const { addEmployee, editEmployee } = useAddEmployee();
  const { positions } = usePositions();

const onAddSubmit = async (data: AddEmployee) => {
    await addEmployee(data );
  }

const onEditSubmit = async (data: Employee) => {
    await editEmployee(data );
  }


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
    ) : (mode === "edit" && employee) ? (
        <Form schema={editEmployeeSchema} onSubmit={onEditSubmit} defaultValues={employee}>
            <FormInput name="id" label="ID" disabled/>
            <FormInput name="firstName" label="Name"/>
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" />
            <FormSelect name="positionId" label="Position" options={(positions ?? []).map(p => ({value: p.id, label: p.title }))} />
            <FormDatePicker name="hireDate" label="Hire Date" placeholder="Select a date"/>  {/*Replace data type to DATE not string*/}
            <button type="submit">Save</button>
        </Form>
    ) :  (mode === "add") ? (
        <Form schema={addEmployeeSchema} onSubmit={onAddSubmit} defaultValues={emptyEmployee}>
            <FormInput name="firstName" label="Name"/>
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" />
            <FormSelect name="positionId" label="Position" options={(positions ?? []).map(p => ({value: p.id, label: p.title }))} />
            <FormDatePicker name="hireDate" label="Hire Date" placeholder="Select a date"/>  {/*Replace data type to DATE not string*/}
            <button type="submit">Save</button>
        </Form> ) :
  
    (
      <div>No data</div>
    )}
    </div>
  );
}
