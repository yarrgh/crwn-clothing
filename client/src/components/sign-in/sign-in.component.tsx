import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { SignInCredentials } from "../../common/interfaces/user";
import { userActions } from "../../store/user/userSlice";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { Buttons, SignInContainer, Title } from "./sign-in.styles";

export const SignIn = () => {
  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(userActions.emailSignInStart({ email, password }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
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
          <CustomButton
            type="button"
            onClick={() => dispatch(userActions.googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  );
};
