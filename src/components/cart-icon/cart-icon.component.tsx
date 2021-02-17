import React from "react";
import "./cart-icon.styles.scss";
import shoppingIcon from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItemCount,
  toggleCartHidden,
} from "../../store/cart/cartSlice";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src={shoppingIcon} className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};
