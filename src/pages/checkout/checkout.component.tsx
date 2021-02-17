import React from "react";
import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSlice";
import {
  CheckoutHeader,
  CheckoutPageContainer,
  CheckoutTestWarning,
  CheckoutTotal,
  HeaderBlock,
  CheckoutButton,
} from "./checkout.styles";

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <CheckoutTotal>
        <span>TOTAL: ${total}</span>
      </CheckoutTotal>
      <CheckoutTestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - EXP: 01/25 - CVV: 123
      </CheckoutTestWarning>
      <CheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};
