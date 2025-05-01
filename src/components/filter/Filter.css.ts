import { style } from "@vanilla-extract/css";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";

export const filterStyle = style({
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  width: "100%",
  background: "red",
});

export const commonStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  transition: "all 300ms ease",
});

export const sizeStyle = {
  small: style({
    ...Typographies.caption.R,
    padding: "6px 10px",
  }),

  medium: style({
    ...Typographies.body.R,
    padding: "8px 12px",
  }),

  large: style({
    ...Typographies.body.R,
    padding: "12px 16px",
  }),
};

export const fillStyle = {
  default: style({
    color: Colors.basic.black,
    backgroundColor: Colors.light[300],

    selectors: {
      "&:hover": {
        backgroundColor: Colors.light[400],
      },
      "&:active": {
        backgroundColor: Colors.light[200],
      },
    },
  }),

  selected: style({
    color: Colors.basic.white,
    backgroundColor: Colors.primary[100],

    selectors: {
      "&:hover": {
        backgroundColor: Colors.secondary[100],
      },
      "&:active": {
        backgroundColor: Colors.secondary[50],
      },
    },
  }),
};

export const strokeStyle = {
  default: style({
    border: `1px solid ${Colors.light[200]}`,
    color: Colors.basic.black,
    backgroundColor: Colors.basic.white,

    selectors: {
      "&:hover": {
        backgroundColor: Colors.light[400],
      },
      "&:active": {
        backgroundColor: Colors.light[300],
      },
    },
  }),

  selected: style({
    border: `1px solid ${Colors.primary[100]}`,
    color: Colors.primary[100],

    selectors: {
      "&:hover": {
        backgroundColor: Colors.secondary[500],
      },
      "&:active": {
        backgroundColor: Colors.secondary[400],
      },
    },
  }),
};

export const roundStyle = {
  small: style({
    borderRadius: 20,
  }),

  medium: style({
    borderRadius: 28,
  }),

  large: style({
    borderRadius: 28,
  }),
};

export const squareStyle = style({
  borderRadius: 8,
});
