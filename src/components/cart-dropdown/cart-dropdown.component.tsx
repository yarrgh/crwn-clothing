import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSlice";
import { CartItem } from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./card-dropdown.styles.scss";

export const CartDropdown = () => {
  const cartItem = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
