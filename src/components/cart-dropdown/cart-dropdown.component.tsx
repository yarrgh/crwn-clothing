import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCartItems, cartActions } from "../../store/cart/cartSlice";
import { CartItem } from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItemContainer,
  CheckoutButton,
  EmptyMessage,
} from "./cart-dropdown.styles";

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  const dispatch = useDispatch();

  const goToCheckout = () => {
    history.push("/checkout");
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemContainer>
      <CheckoutButton onClick={goToCheckout}>GO TO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
  );
};
