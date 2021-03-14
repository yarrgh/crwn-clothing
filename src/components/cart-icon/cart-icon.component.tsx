import React from "react";
import shoppingIcon from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemCount, cartActions } from "../../store/cart/cartSlice";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <CartIconContainer onClick={() => dispatch(cartActions.toggleCartHidden())}>
      <ShoppingIcon src={shoppingIcon} />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};
