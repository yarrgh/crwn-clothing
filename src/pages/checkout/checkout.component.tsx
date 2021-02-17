import React from "react";
import { useSelector } from "react-redux";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import { StripeButton } from "../../components/stripe-button/strip-button.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSlice";
import "./checkout.styles.scss";

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - EXP: 01/25 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};
