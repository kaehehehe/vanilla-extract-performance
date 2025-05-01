import { Children, Fragment, MouseEvent, ReactElement } from "react";
import { Check } from "lucide-react";
import { Size } from "../../types/size";
import clsx from "clsx";
import {
  commonStyle,
  fillStyle,
  filterStyle,
  roundStyle,
  sizeStyle,
  squareStyle,
  strokeStyle,
} from "./Filter.css";

export type FilterProps = {
  children: ReactElement<typeof Chip>[];
  overrideStyle?: string;
};

export function Filter({ children, overrideStyle }: FilterProps) {
  const filterChips = Children.toArray(children);
  const combinedClassName = clsx(filterStyle, overrideStyle);

  return (
    <div className={combinedClassName}>
      {filterChips.map((chip, index) => (
        <Fragment key={index}>{chip}</Fragment>
      ))}
    </div>
  );
}

export type ChipProps = {
  label: string;
  size?: Size;
  selected: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant: "fill" | "stroke";
  shape: "round" | "square";
};

const Chip = ({
  label,
  size = "medium",
  selected,
  onClick,
  variant,
  shape,
}: ChipProps) => {
  return (
    <button
      className={clsx(
        commonStyle,
        sizeStyle[size],
        variant === "fill"
          ? fillStyle[selected ? "selected" : "default"]
          : strokeStyle[selected ? "selected" : "default"],
        shape === "round" ? roundStyle[size] : squareStyle
      )}
      onClick={onClick}
    >
      {selected && <Check size="16px" />}
      {label}
    </button>
  );
};

export function RoundFillChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="fill" shape="round" />;
}

export function RoundStrokeChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="stroke" shape="round" />;
}

export function SquareFillChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="fill" shape="square" />;
}

export function SquareStrokeChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="stroke" shape="square" />;
}

Filter.RoundFillChip = RoundFillChip;
Filter.RoundStrokeChip = RoundStrokeChip;
Filter.SquareFillChip = SquareFillChip;
Filter.SquareStrokeChip = SquareStrokeChip;
