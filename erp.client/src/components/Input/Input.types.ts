import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  required?: boolean;
  error?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
