import React, { ChangeEvent, FormEvent, useState } from "react";
import { auth, signInWithGoogle } from "../../common/firebase/firebase.utils";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { Buttons, SignInContainer, Title } from "./sign-in.styles";

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
    <SignInContainer>
      <Title>I already have an account</Title>
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

        <Buttons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};
