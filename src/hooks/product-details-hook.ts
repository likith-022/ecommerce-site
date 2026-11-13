
import useSWR from "swr";
import { getProductById } from "../services/product-service";
import type { Product } from "../type/product-type";

const useProductDetails = (id: string) => {
  const { data, error, isLoading } = useSWR<Product>(
    id ? `product-${id}` : null,
    () => getProductById(id)
  );

  return {
    product: data,
    error,
    isLoading,
  };
};

export default useProductDetails;
