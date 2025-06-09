import { useFormContext, Controller } from "react-hook-form";
import type { HTMLAttributes } from "react";
import "./FormSelect.scss";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  label?: string;
  options: Option[];
}

export const FormSelect = ({ name, label, options, ...rest }: FormSelectProps) => {
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
          <select
            id={name}
            className={`input ${error ? "errorInput" : ""}`}
            value={field.value ?? ""}
            onChange={field.onChange}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />

      {error && <p className="errorText">{error}</p>}
    </div>
  );
};
