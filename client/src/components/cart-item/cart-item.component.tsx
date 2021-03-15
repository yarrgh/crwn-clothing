import React, { FC } from "react";
import { ICartItem } from "../../common/interfaces/cart-item";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemImg,
  CartItemName,
  CartItemPrice,
} from "./cart-item.styles";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: FC<CartItemProps> = ({
  item: { imageUrl, price, name, quantity },
}) => {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </CartItemDetails>
    </CartItemContainer>
  );
};
