import React from "react";
import { SignIn } from "../../components";
import "./auth.styles.scss";

export const Auth = () => {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
};
