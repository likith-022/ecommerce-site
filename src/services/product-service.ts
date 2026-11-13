
import type { Product } from "../type/product-type";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
};



export const getProductById = async (
  id: string
): Promise<Product> => {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data: Product = await response.json();

  return data;
};
