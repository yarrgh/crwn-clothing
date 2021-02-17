import { createSelector, createSlice } from "@reduxjs/toolkit";
import { collectionData, ICollectionData } from "../../common/data";
import memoize from "lodash.memoize";

interface ShopState {
  collections: ICollectionData;
}

const initialState: ShopState = {
  collections: collectionData,
};

export const userSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export const shopReducer = userSlice.reducer;

const selectShopState = (state: any) => state.shop as ShopState;

export const selectCollections = createSelector(
  [selectShopState],
  (state) => state.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
