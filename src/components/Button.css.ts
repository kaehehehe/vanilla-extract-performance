import { style, styleVariants } from "@vanilla-extract/css";
import { Typographies } from "../constants/typography";
import { Colors } from "../constants/colors";

export const commonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  transition: "all 300ms ease",
  selectors: {
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export const sizeStyle = styleVariants({
  small: {
    fontSize: Typographies.caption.R.fontSize,
    fontWeight: Typographies.caption.R.fontWeight,
    lineHeight: Typographies.caption.R.lineHeight,
    padding: "6px 10px",
    borderRadius: "6px",
  },
  medium: {
    fontSize: Typographies.body.R.fontSize,
    fontWeight: Typographies.body.R.fontWeight,
    lineHeight: Typographies.body.R.lineHeight,
    padding: "8px 12px",
    borderRadius: "8px",
  },
  large: {
    fontSize: Typographies.body.R.fontSize,
    fontWeight: Typographies.body.R.fontWeight,
    lineHeight: Typographies.body.R.lineHeight,
    padding: "12px 20px",
    borderRadius: "8px",
  },
});

export const typeStyle = styleVariants({
  primary: {
    backgroundColor: Colors.primary[100],
    color: Colors.basic.white,
    selectors: {
      "&:hover": { backgroundColor: Colors.secondary[100] },
      "&:active": { backgroundColor: Colors.secondary[50] },
      "&:disabled": {
        backgroundColor: Colors.light[200],
        color: Colors.neutral[200],
      },
    },
  },
  secondary: {
    backgroundColor: Colors.basic.white,
    color: Colors.basic.black,
    border: `1px solid ${Colors.light[200]}`,
    selectors: {
      "&:hover": { backgroundColor: Colors.light[400] },
      "&:active": { backgroundColor: Colors.light[300] },
      "&:disabled": {
        color: Colors.light[100],
        backgroundColor: Colors.light[400],
        borderColor: Colors.light[100],
      },
    },
  },
  warning: {
    backgroundColor: Colors.red[100],
    color: Colors.basic.white,
    selectors: {
      "&:hover": { backgroundColor: Colors.red[200] },
      "&:active": { backgroundColor: Colors.red[50] },
      "&:disabled": {
        backgroundColor: Colors.light[200],
        color: Colors.neutral[200],
      },
    },
  },
  success: {
    backgroundColor: Colors.green[100],
    color: Colors.basic.white,
    selectors: {
      "&:hover": { backgroundColor: Colors.green[200] },
      "&:active": { backgroundColor: Colors.green[50] },
      "&:disabled": {
        backgroundColor: Colors.light[200],
        color: Colors.neutral[200],
      },
    },
  },
});
