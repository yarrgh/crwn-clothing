import React, { FC } from "react";
import { ICartItem } from "../../common/interfaces/cart-item";
import "./checkout-item.styles.scss";

interface CheckoutItemProps {
  item: ICartItem;
}

export const CheckoutItem: FC<CheckoutItemProps> = ({
  item: { imageUrl, name, quantity, price },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};
