import { ButtonHTMLAttributes, ReactElement } from "react";

import clsx from "clsx";
import { Size } from "../../types/size";
import { commonStyle, sizeStyle, typeStyle } from "./Button.css";

export type ButtonType = "primary" | "secondary" | "warning" | "success";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
> & {
  label: string;
  type?: ButtonType;
  size?: Size;
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

function Button({
  label,
  type = "primary",
  size = "medium",
  disabled = false,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) {
  const buttonClassName = clsx(commonStyle, sizeStyle[size], typeStyle[type]);

  return (
    <button className={buttonClassName} disabled={disabled} {...rest}>
      {startIcon}
      <span>{label}</span>
      {endIcon}
    </button>
  );
}

export default Button;
