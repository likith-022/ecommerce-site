
import useSWR from "swr";
import { getProducts } from "../services/product-service";
import type { Product } from "../type/product-type";

const useProducts = (search:string) => {
  const { data, error, isLoading } = useSWR<Product[]>(
     search.trim()
      ? ["allProducts", search.trim()]
      : "allProducts",
    () => getProducts(search)
  );

  return {
    products: data || [],
    error,
    isLoading,
  };
};

export default useProducts;
