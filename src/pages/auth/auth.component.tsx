import React from "react";
import { SignIn } from "../../components";
import { SignUp } from "../../components/sign-up/sign-up.component";
import "./auth.styles.scss";

export const Auth = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};
