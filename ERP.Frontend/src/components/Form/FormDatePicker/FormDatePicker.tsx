import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import type { HTMLAttributes } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./FormDatePicker.scss";

interface FormDatePickerProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  placeholder?: string;
}

export const FormDatePicker = ({
  name,
  label,
  placeholder,
  ...rest
}: FormDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="wrapper" {...rest}>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            id={name}
            className={`input ${error ? "errorInput" : ""}`}
            selected={field.value ? new Date(field.value) : undefined}
            onChange={(date) => field.onChange(date)}
            placeholderText={placeholder}
          />
        )}
      />

      {error && <p className="errorText">{error}</p>}
    </div>
  );
};
