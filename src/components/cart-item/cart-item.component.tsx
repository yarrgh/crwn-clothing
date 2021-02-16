import React, { FC } from "react";
import { ICartItem } from "../../common/interfaces/cart-item";
import "./cart-item.styles.scss";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
