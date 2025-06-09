import "./Button.scss";
import { type ButtonProps } from "./Button.types";

export default function Button({
  icon,
  iconPosition = "left",
  text,
  onClick,
  isLoading = false,
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={isLoading || isDisabled}
    >
      <div className={`content ${isLoading ? "blurred" : ""} ${isDisabled ? "disabled" : ""}`}>
        {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
        <span className="text">{text}</span>
        {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
      </div>

      {isLoading && (
        <div className="overlay">
          <span className="spinner" />
        </div>
      )}
    </button>
  );
}
