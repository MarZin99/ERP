import { useFormContext } from "react-hook-form";
import "./FormInput.scss";
import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const FormInput = ({ name, label, ...rest }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="wrapper">
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}

      <input
        id={name}
        className={`input ${error ? "errorInput" : ""}`}
        {...register(name)}
        {...rest}
      />

      {error && <p className="errorText">{error}</p>}
    </div>
  );
};
