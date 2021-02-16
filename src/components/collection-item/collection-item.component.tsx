import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../common/interfaces/product";
import { addCartItem } from "../../store/cart/cartSlice";
import { CustomButton } from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

interface CollectionItemProps {
  item: Product;
}

export const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(item));
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={addToCart}>
        Add to cart
      </CustomButton>
    </div>
  );
};
