
import useSWR from "swr";

import { getUserCart } from "../services/cart-service";

const useCart = (userId: number) => {
  const {
    data: cart,
    error,
    isLoading,
  } = useSWR(
    userId ? ["user-cart", userId] : null,
    () => getUserCart(userId)
  );


  return {
    cart,
    error,
    isLoading,
  };
};

export default useCart;
