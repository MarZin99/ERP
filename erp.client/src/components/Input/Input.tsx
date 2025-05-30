import "./Input.scss";
import type { InputProps } from "./Input.types";

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  error,
  className = "",
  disabled = false,
  style,
}: InputProps) {
  return (
    <div className={`form-input ${className}`} style={style}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`input-field ${error ? "input-error" : ""}`}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
