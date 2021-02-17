import { createSelector, createSlice } from "@reduxjs/toolkit";
import { collectionData } from "../../common/data";
import { IDirectory } from "../../common/interfaces/directory";

interface ShopState {
  collections: IDirectory[];
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
