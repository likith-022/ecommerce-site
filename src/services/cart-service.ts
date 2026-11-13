

import type { Cart } from "../type/cart-type";

export const getUserCart = async (userId: number): Promise<Cart> => {
  const response = await fetch(
    `https://dummyjson.com/carts/user/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cart data");
  }

  const data = await response.json();

  if (!data.carts || data.carts.length === 0) {
    throw new Error("No cart found for this user");
  }

  return data.carts[0];
};
