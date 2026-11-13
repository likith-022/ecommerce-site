
import { useParams, Link } from "react-router";
import useProductDetails from "../hooks/product-details-hook";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { product, isLoading, error } = useProductDetails(id || "");

  if (isLoading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-success" />
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-danger">Product not found</h4>
        <Link to="/products" className="btn btn-success mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">

      <Link
        to="/products"
        className="text-success text-decoration-none"
      >
        ← Back to Products
      </Link>

     
      <div className="card border-0 shadow-sm rounded-4 p-4 mt-3">
        <div className="row align-items-center g-4">

          <div className="col-md-5">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded-3 border w-100"
              style={{
                height: "350px",
                objectFit: "contain",
              }}
            />

           
          </div>

          <div className="col-md-7">

            <p className="text-success text-uppercase fw-semibold mb-2">
              {product.category}
            </p>

            <h2 className="fw-bold mb-3">
              {product.title}
            </h2>

            <h3 className="fw-bold text-success mb-3">
              ${product.price}
            </h3>

            <div className="d-flex gap-2 flex-wrap mb-3">
              <span className="badge bg-danger fs-6">
                {product.discountPercentage}% off
              </span>

              <span className="badge bg-secondary fs-6">
                {product.availabilityStatus}
              </span>
            </div>

            <p className="text-muted mb-3">
              {product.description}
            </p>

            <p>
              <strong>Rating:</strong> {product.rating} / 5
            </p>

            <p>
              <strong>Stock:</strong> {product.stock} units
            </p>

            <div className="d-flex gap-3 flex-wrap mt-4">
              <button
                type="button"
                className="btn btn-outline-success rounded-pill px-5"
                disabled
              >
                BUY NOW
              </button>

              <button
                type="button"
                className="btn btn-outline-success rounded-pill px-5"
                disabled
              >
                ADD TO CART
              </button>
            </div>

          </div>
        </div>
      </div>

    
      <div className="row g-4 mt-2">

     
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

            <h3 className="fw-semibold mb-4">
              Product Information
            </h3>

            <div className="row g-4">

              <div className="col-6">
                <p className="text-muted mb-1">Product ID</p>
                <strong>{product.id}</strong>
              </div>

              <div className="col-6">
                <p className="text-muted mb-1">SKU</p>
                <strong>{product.sku}</strong>
              </div>

              <div className="col-6">
                <p className="text-muted mb-1">Category</p>
                <strong>{product.category}</strong>
              </div>

              <div className="col-6">
                <p className="text-muted mb-1">Brand</p>
                <strong>{product.brand || "Not specified"}</strong>
              </div>

              <div className="col-6">
                <p className="text-muted mb-1">Weight</p>
                <strong>{product.weight}</strong>
              </div>

              <div className="col-6">
                <p className="text-muted mb-1">Minimum Order</p>
                <strong>{product.minimumOrderQuantity}</strong>
              </div>

            </div>
          </div>
        </div>

     
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

            <h3 className="fw-semibold mb-4">
              Dimensions
            </h3>

            <div className="row g-3 text-center">

              <div className="col-4">
                <div className="bg-light rounded-3 p-3 h-100">
                  <p className="text-muted mb-2">Width</p>
                  <h4>{product.dimensions.width}</h4>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-light rounded-3 p-3 h-100">
                  <p className="text-muted mb-2">Height</p>
                  <h4>{product.dimensions.height}</h4>
                </div>
              </div>

              <div className="col-4">
                <div className="bg-light rounded-3 p-3 h-100">
                  <p className="text-muted mb-2">Depth</p>
                  <h4>{product.dimensions.depth}</h4>
                </div>
              </div>

            </div>

            <hr className="my-4" />

            <h4 className="fw-semibold mb-3">
              Delivery & Returns
            </h4>

            <p>
              <strong>Warranty:</strong>{" "}
              {product.warrantyInformation}
            </p>

            <p>
              <strong>Shipping:</strong>{" "}
              {product.shippingInformation}
            </p>

            <p className="mb-0">
              <strong>Return Policy:</strong>{" "}
              {product.returnPolicy}
            </p>

          </div>
        </div>
      </div>
    
      <div className="card border-0 shadow-sm rounded-4 p-4 mt-4">

        <h3 className="fw-semibold mb-4">
          Customer Reviews
        </h3>

        <div className="row g-3">
          {product.reviews.map((review, index) => (
            <div className="col-md-6" key={index}>
              <div className="border rounded-3 p-3 h-100">

                <h6 className="fw-bold">
                  {review.reviewerName}
                </h6>

                <p className="text-warning mb-2">
                  Rating: {review.rating} / 5
                </p>

                <p className="text-muted">
                  {review.comment}
                </p>

                <small className="text-muted">
                  {new Date(review.date).toLocaleDateString()}
                </small>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ProductDetailsPage;
