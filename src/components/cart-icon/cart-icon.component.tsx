import React from "react";
import "./cart-icon.styles.scss";
import shoppingIcon from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../store/cart/cartSlice";

export const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src={shoppingIcon} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
