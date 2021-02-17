import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { ICartItem } from "../../common/interfaces/cart-item";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../store/cart/cartSlice";
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemArrow,
  ItemDetail,
  ItemImage,
  ItemQuantity,
  ItemQuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

interface CheckoutItemProps {
  item: ICartItem;
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const dispatch = useDispatch();

  const clearItem = () => {
    dispatch(clearCartItem(item));
  };

  const addItem = () => {
    dispatch(addCartItem(item));
  };

  const removeItem = () => {
    dispatch(removeCartItem(item));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemDetail>{name}</ItemDetail>
      <ItemQuantity>
        <ItemArrow onClick={removeItem}>&#10094;</ItemArrow>
        <ItemQuantityValue>{quantity}</ItemQuantityValue>
        <ItemArrow onClick={addItem}>&#10095;</ItemArrow>
      </ItemQuantity>
      <ItemDetail>${price}</ItemDetail>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
