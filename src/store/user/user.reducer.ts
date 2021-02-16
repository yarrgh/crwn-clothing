import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../common/interfaces/user";

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectCurrentUser = (state: any) =>
  (state.user as UserState).currentUser;
