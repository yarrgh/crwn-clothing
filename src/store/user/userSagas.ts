import { takeLatest } from "@redux-saga/core/effects";
import { userActions } from "./userSlice";
import {
  auth,
  googleProvider,
  createUserProfile,
  DocumentReference,
  DocumentSnapshot,
  UserCredential,
  getCurrentUser,
} from "../../common/firebase/firebase.utils";
import { call, all, put } from "redux-saga/effects";
import {
  SignUpCredentials,
  SignUpSuccessCredentials,
  User,
} from "../../common/interfaces/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { SignUp } from "../../components/sign-up/sign-up.component";

export function* userSagas() {
  yield all([
    call(handleCheckUserSession),
    call(handleGoogleSignInStart),
    call(handleEmailSignInStart),
    call(handleSignOutStart),
    call(handleSignUpStart),
    call(handleSignUpSuccess),
  ]);
}

function* handleCheckUserSession() {
  yield takeLatest(userActions.checkUserSession, isUserAuthenticated);
}

function* handleGoogleSignInStart() {
  yield takeLatest(userActions.googleSignInStart, signInWithGoogle);
}

function* handleEmailSignInStart() {
  yield takeLatest(userActions.emailSignInStart, signinWithEmail);
}

function* handleSignOutStart() {
  yield takeLatest(userActions.signOutStart, signOut);
}

function* handleSignUpStart() {
  yield takeLatest(userActions.signUpStart, signUp);
}

function* handleSignUpSuccess() {
  yield takeLatest(userActions.signUpSuccess, signInAfterSignUp);
}

function* isUserAuthenticated() {
  try {
    const userAuth: User | null = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {}
}

function* signInWithGoogle() {
  try {
    const userAuth: UserCredential = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(userAuth.user as User);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

function* signinWithEmail({
  payload: { email, password },
}: PayloadAction<{ email: string; password: string }>) {
  try {
    const userAuth: UserCredential = yield auth.signInWithEmailAndPassword(
      email,
      password
    );

    yield getSnapshotFromUserAuth(userAuth.user as User);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalData?: { [id: string]: any }
) {
  try {
    const userRef: DocumentReference | undefined = yield call(
      createUserProfile,
      userAuth as User,
      additionalData
    );
    const userSnapshot: DocumentSnapshot = yield userRef!.get();
    const userData = userSnapshot.data() as User;
    const signedInUser: User = {
      uid: userSnapshot.id,
      displayName: userData.displayName,
      email: userData.email,
    };

    yield put(userActions.signInSuccess(signedInUser));
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(userActions.signOutSuccess());
  } catch (error) {
    yield put(userActions.signOutFailure(error));
  }
}

function* signUp({
  payload: { email, password, displayName },
}: PayloadAction<SignUpCredentials>) {
  try {
    const userAuth: UserCredential = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const user = {
      uid: userAuth.user!.uid,
      email: userAuth.user!.email!,
    } as User;

    yield put(
      userActions.signUpSuccess({
        user,
        additionalData: { displayName },
      })
    );
  } catch (error) {
    yield put(userActions.signUpFailure(error));
  }
}

function* signInAfterSignUp({
  payload: { user, additionalData },
}: PayloadAction<SignUpSuccessCredentials>) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
