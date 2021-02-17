import { ICartItem } from "../../common/interfaces/cart-item";
import { Product } from "../../common/interfaces/product";

export const addItemToCart = (cartItems: ICartItem[], product: Product) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: ICartItem[], item: ICartItem) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (!existingItem) {
    return cartItems;
  }

  if (existingItem.quantity === 1) {
    return clearItemFromCart(cartItems, item);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems: ICartItem[], item: ICartItem) => {
  return cartItems.filter((i) => i.id !== item.id);
};
