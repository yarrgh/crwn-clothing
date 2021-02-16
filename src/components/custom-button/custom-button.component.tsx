import React, { ButtonHTMLAttributes, FC } from "react";
import "./custom-button.styles.scss";

interface CustomButtonProps {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & CustomButtonProps
> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn && "google-sign-in"} ${
        inverted && "inverted"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
