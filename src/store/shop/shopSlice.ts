import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import memoize from "lodash.memoize";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../common/firebase/firebase.utils";

interface ShopState {
  collections: { [id: string]: any } | null;
  isFetching: boolean;
  errorMessage?: string;
}

const initialState: ShopState = {
  collections: null,
  isFetching: true,
};

export const fetchCollections = createAsyncThunk(
  "shop/fetchCollections",
  async () => {
    const collectionRef = firestore.collection("collections");

    const snapshot = await collectionRef.get();
    return convertCollectionsSnapshotToMap(snapshot);
  }
);

export const userSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections(state, action: PayloadAction<any>) {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.isFetching = false;
      state.collections = action.payload;
    });

    builder.addCase(fetchCollections.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = (action.payload as any).message;
    });
  },
});

export const shopReducer = userSlice.reducer;
export const { updateCollections } = userSlice.actions;

const selectShopState = (state: any) => state.shop as ShopState;

export const selectCollections = createSelector(
  [selectShopState],
  (state) => state.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsFetching = createSelector(
  [selectShopState],
  (state) => state.isFetching
);
