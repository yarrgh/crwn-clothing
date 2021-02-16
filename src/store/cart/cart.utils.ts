import { CartItem } from "../../common/interfaces/cart-item";
import { Product } from "../../common/interfaces/product";

export const addItemToCart = (cartItems: CartItem[], product: Product) => {
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
