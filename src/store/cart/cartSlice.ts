import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../common/interfaces/cart-item";
import { Product } from "../../common/interfaces/product";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

interface CartState {
  hidden: boolean;
  cartItems: ICartItem[];
}

const initialState: CartState = {
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden: (state, _: PayloadAction) => {
      state.hidden = !state.hidden;
    },
    addCartItem: (state, action: PayloadAction<Product>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeCartItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearCartItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = clearItemFromCart(state.cartItems, action.payload);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

const selectCart = (state: any) => state.cart as CartState;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartState) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartState) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems: ICartItem[]) =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: ICartItem[]) =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
