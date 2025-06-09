import { type ReactNode } from "react";

export interface ButtonProps {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}