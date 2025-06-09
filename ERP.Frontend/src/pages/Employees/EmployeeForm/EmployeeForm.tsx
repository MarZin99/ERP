
import "./EmployeeForm.scss";
import { employeeSchema, type EmployeeFormProps, type Employee } from "../../../models/EmployeeForm.types";
import Button from "../../../components/Button/Button";
import { useAddEmployee, useEmployee } from "../../../_data/employee.hook";
import { Form } from "../../../components/Form/Form";
import { FormInput } from "../../../components/Form/FormInput/FormInput";
import {type SubmitHandler } from "react-hook-form";
import 'react-datepicker/dist/react-datepicker.css'
import { FormDatePicker } from "../../../components/Form/FormDatePicker/FormDatePicker";
import { usePositions } from "../../../_data/position.hook";
import { FormSelect } from "../../../components/Form/FormSelect/FormSelect";

export default function EmployeeForm({ employeeId }: EmployeeFormProps) {

  const { employee, loading, error } = useEmployee(employeeId);
  const { addEmployee } = useAddEmployee();
  const { positions } = usePositions();

const test= () => {
  console.log(employee)
}

const onSubmit: SubmitHandler<Employee> = async (data) => {
  await addEmployee(data);
};

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
        <Form schema={employeeSchema} onSubmit={onSubmit} defaultValues={employee ?? {}}>
            <FormInput name="id" label="ID" disabled/>
            <FormInput name="firstName" label="Name"/>
            <FormInput name="lastName" label="Last Name" />
            <FormSelect name="position" label="Position" options={(positions ?? []).map(p => ({value: p.id, label: p.title }))} />
            <FormDatePicker name="hireDate" label="Hire Date" />  {/*Replace data type to DATE not string*/}
            <button type="submit">Save</button>
        </Form>
    ) : (
      <div>No data</div>
    )}
      <button onClick={() => test()}>test</button>
    </div>
  );
}
