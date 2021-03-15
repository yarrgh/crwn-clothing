import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SignInCredentials,
  SignUpCredentials,
  SignUpSuccessCredentials,
  User,
} from "../../common/interfaces/user";

interface UserState {
  currentUser: User | null;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession() {},
    googleSignInStart(state) {},
    emailSignInStart(_, action: PayloadAction<SignInCredentials>) {},

    signInSuccess(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure(state, action: PayloadAction<any>) {
      state.error = action.payload.message;
    },
    signUpStart(_, payload: PayloadAction<SignUpCredentials>) {},
    signUpSuccess(_, payload: PayloadAction<SignUpSuccessCredentials>) {},
    signUpFailure(state, action: PayloadAction<any>) {
      state.error = action.payload.message;
    },
    signOutStart() {},
    signOutSuccess(state) {
      state.currentUser = null;
      state.error = null;
    },
    signOutFailure(state, action: PayloadAction<any>) {
      state.error = action.payload.message;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;

const selectUser = (state: any) => state.user as UserState;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserState) => user.currentUser
);
