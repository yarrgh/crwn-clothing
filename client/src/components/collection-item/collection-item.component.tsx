import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../../common/interfaces/product";
import { cartActions } from "../../store/cart/cartSlice";
import {
  AddToCartButton,
  CollectionFooter,
  CollectionItemContainer,
  CollectionItemImage,
  CollectionName,
  CollectionPrice,
} from "./collection-item.styles";

interface CollectionItemProps {
  item: Product;
}

export const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addCartItem(item));
  };

  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl}></CollectionItemImage>
      <CollectionFooter>
        <CollectionName>{name}</CollectionName>
        <CollectionPrice>${price}</CollectionPrice>
      </CollectionFooter>
      <AddToCartButton inverted onClick={addToCart}>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};
