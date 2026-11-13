

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../type/product-type";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface CartStore {
  cartId: number | null;
  cart: CartItem[];

  setCart: (cartId: number, products: CartItem[]) => void;

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartId: null,
      cart: [],

      // Store API cart data in Zustand
      setCart: (cartId, products) =>
        set({
          cartId,
          cart: products,
        }),

      // Add product
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      total: item.price * (item.quantity + 1),
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                total: product.price,
                discountPercentage: product.discountPercentage,
                discountedTotal:
                  product.price -
                  (product.price * product.discountPercentage) / 100,
                thumbnail: product.thumbnail,
              },
            ],
          };
        }),

   
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),


      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.price * (item.quantity + 1),
                }
              : item
          ),
        })),

     
      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    total: item.price * (item.quantity - 1),
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

    
      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    {
      name: "glk-cart",
    }
  )
);

export default useCartStore;
