import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import memoize from "lodash.memoize";

interface ShopState {
  collections: { [id: string]: any } | null;
  isFetching: boolean;
  errorMessage?: string;
}

const initialState: ShopState = {
  collections: null,
  isFetching: false,
};

export const userSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    updateCollections(state, action: PayloadAction<any>) {
      state.collections = action.payload;
    },
    fetchCollections(state) {
      state.isFetching = true;
    },
    fetchCollectionsSuccess(
      state,
      action: PayloadAction<{ [id: string]: any }>
    ) {
      state.isFetching = false;
      state.collections = action.payload;
    },
    fetchCollectionsFailure(state, action: PayloadAction<unknown>) {
      state.isFetching = false;
      state.errorMessage = (action.payload as any).message;
    },
  },
});

export const shopReducer = userSlice.reducer;
export const shopActions = userSlice.actions;

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
  (state) => state.isFetching || !state.collections
);
