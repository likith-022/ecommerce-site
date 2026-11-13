import useProducts from "../hooks/product-hook";
import ProductCard from "../components/product-card";
import type { Product } from "../type/product-type";
import { useQueryState, parseAsInteger } from "nuqs";
import useCartStore from "../store/cart-store";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [searchInput, setSearchInput] = useState(search);

  const addToCart = useCartStore((state) => state.addToCart);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const limit = 8;
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  
  useEffect(() => {
    if (searchInput.trim() === search) return;

    const timer = setTimeout(() => {
      setSearch(searchInput.trim() || null);
      setPage(1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchInput, search, setSearch, setPage]);

  const { products, isLoading, error } = useProducts(search);
  const totalPages = Math.ceil(products.length / limit);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const startIndex = (currentPage - 1) * limit;

  const displayedProducts = products.slice(startIndex, startIndex + limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-success">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">Failed to load products</h4>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
            <div className="row mb-4">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-4">
              {displayedProducts.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                <button
                  className="btn btn-outline-success"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  className="btn btn-outline-success"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
      </div>
    </>
  );
};
export default ProductPage;
