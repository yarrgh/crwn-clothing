import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../common/firebase/firebase.utils";
import { shopActions } from "./shopSlice";
import firebase from "firebase/app";

export function* shopSagas() {
  yield all([call(handleFetchCollections)]);
}

function* handleFetchCollections() {
  yield takeLatest(shopActions.fetchCollections.type, fetchCollectionsAsync);
}

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = yield collectionRef.get();
    const collectionsMap: { [id: string]: any } = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(shopActions.fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(shopActions.fetchCollectionsFailure);
  }
}
