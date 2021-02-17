import React, { FC } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

export interface StripeButtonProps {
  price: number;
}

export const StripeButton: FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_514GkZx4vLRsxfi7qpeO7nKY6erABTs2SORDUSlFD8dzLoWngK5khk0V113CGOL83B0wWr2PaVF5GZCDDpz2Zf7RM00mClqutd4";

  const onToken = (token: Token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
