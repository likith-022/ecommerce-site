import { Link } from "react-router";
import type { Product } from "../type/product-type";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="card h-100 border-0 shadow-sm">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="card-img-top"
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

        <div className="card-body d-flex flex-column">
          <p className="text-muted small text-uppercase mb-2">
            {product.category}
          </p>

          <h5 className="card-title fw-semibold">{product.title}</h5>

          <p className="card-text text-muted small">{product.description}</p>

          <h5 className="fw-bold mt-auto mb-3">${product.price}</h5>

          <Link
            to={`/products/${product.id}`}
            className="btn btn-success w-100"
          >
            Product Details
          </Link>
          <button
            className="btn btn-success w-100 mt-2"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
