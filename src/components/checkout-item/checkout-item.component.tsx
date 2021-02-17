import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { ICartItem } from "../../common/interfaces/cart-item";
import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../store/cart/cartSlice";
import "./checkout-item.styles.scss";

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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};
