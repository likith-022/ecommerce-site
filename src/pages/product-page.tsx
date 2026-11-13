import useProducts from "../hooks/product-hook";
import ProductCard from "../components/product-card";
import type { Product } from "../type/product-type";
import { useQueryState, parseAsInteger } from "nuqs";
import useCartStore from "../store/cart-store";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [showCart, setShowCart] = useQueryState("cart");

  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [searchInput, setSearchInput] = useState(search);

  const cart = useCartStore((state) => state.cart);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

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
        {showCart ? (
          <div className="col-12">
            <h3 className="mb-4 text-center">Your Shopping Cart</h3>

            <button
              className="btn btn-success mb-4"
              onClick={() => setShowCart(null)}
            >
              Continue Shopping
            </button>

            {cart.length === 0 ? (
              <p className="text-center">Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="card p-3 mb-3" key={item.id}>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>

                      <div className="col-md-4">
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                      </div>

                      <div className="col-md-3 d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-success"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          className="btn btn-outline-success"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <div className="col-md-2">
                        <strong>${item.price * item.quantity}</strong>
                      </div>

                      <div className="col-md-1">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="text-end mt-4">
                  <h5>Total Items: {totalItems}</h5>
                  <h4>Total: ${totalPrice.toFixed(2)}</h4>

                  <button className="btn btn-danger me-2" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};
export default ProductPage;
