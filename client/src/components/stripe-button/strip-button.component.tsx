import axios from "axios";
import React, { FC } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

export interface StripeButtonProps {
  price: number;
}

export const StripeButton: FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_514GkZx4vLRsxfi7qpeO7nKY6erABTs2SORDUSlFD8dzLoWngK5khk0V113CGOL83B0wWr2PaVF5GZCDDpz2Zf7RM00mClqutd4";

  const onToken = async (token: Token) => {
    console.log(token);
    try {
      const response = await axios.post("/payment", {
        token,
        amount: priceForStripe,
      });
      console.log(response.data);
      alert("Payment successful");
    } catch (error) {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was an issue with your payment");
    }
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
