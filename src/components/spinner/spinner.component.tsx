import React, { FC } from "react";
import "./spinner.styles";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

interface SpinnerProps {
  isLoading: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );

  return <>{children}</>;
};
