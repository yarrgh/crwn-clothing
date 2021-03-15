import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IDirectory } from "../../common/interfaces/directory";

const initialState: IDirectory[] = [
  {
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

export const userSlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export const directoryReducer = userSlice.reducer;

const selectDirectoryState = (state: any) => state.directory as IDirectory[];

export const selectDirectories = createSelector(
  [selectDirectoryState],
  (state: IDirectory[]) => state
);
