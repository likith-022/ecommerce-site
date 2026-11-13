
import useProducts from "../hooks/product-hook";
import ProductCard from "../components/product-card";
import type { Product } from "../type/product-type";

const ProductPage = () => {
  const { products, isLoading, error } = useProducts();

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
    <section className="container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#164D3B" }}>
          Our Products
        </h2>

        <p className="text-muted">
          Discover products for your everyday needs.
        </p>
      </div>

      <div className="row g-4">
       {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-muted">
          No products found.
        </p>
      )}
    </section>
  );
};

export default ProductPage;
