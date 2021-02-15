import React, { ButtonHTMLAttributes, FC } from "react";
import "./custom-button.styles.scss";

interface CustomButtonProps {
  isGoogleSignIn?: boolean;
}

export const CustomButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps
> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
