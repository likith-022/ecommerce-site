
import type { Product, ProductsResponse } from "../type/product-type";
const API_URL = "https://dummyjson.com";



export const getProducts = async (search:string): Promise<Product[]> => {
  const url = search.trim()
    ? `${API_URL}/products/search?q=${encodeURIComponent(search.trim())}&limit=0`
    : `${API_URL}/products?limit=0`;

    const response = await fetch(url);


  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data :ProductsResponse= await response.json();

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
