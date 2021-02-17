import React, { ButtonHTMLAttributes, FC } from "react";
import { CustomButtonContainer } from "./custom-button.styles";

interface CustomButtonProps {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps
> = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};
