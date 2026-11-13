
import useSWR from "swr";
import { getProducts } from "../services/product-service";
import type { Product } from "../type/product-type";

const useProducts = () => {
  const { data, error, isLoading } = useSWR<Product[]>(
    "allProducts",
    () => getProducts()
  );

  return {
    products: data || [],
    error,
    isLoading,
  };
};

export default useProducts;
