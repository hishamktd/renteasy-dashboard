import { TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export type CommonButtonProps = {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
  color?: TypographyProps["color"];
};
