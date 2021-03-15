import { all, call, takeLatest, put } from "redux-saga/effects";
import { userActions } from "../user/userSlice";
import { cartActions } from "./cartSlice";

export function* cartSagas() {
  yield all([call(handleSignOutSuccess)]);
}

function* handleSignOutSuccess() {
  yield takeLatest(userActions.signOutSuccess, clearCart);
}

function* clearCart() {
  yield put(cartActions.clearCart());
}
