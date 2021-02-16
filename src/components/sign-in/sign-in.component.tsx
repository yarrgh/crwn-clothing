import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormInput } from "..";
import { auth, signInWithGoogle } from "../../common/firebase/firebase.utils";
import { CustomButton } from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          handleChange={handleChange}
          name="email"
          type="email"
          id="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          id="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
