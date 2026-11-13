
import useCartStore from "../store/cart-store";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">
          Add some products to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      <div className="row">
        <div className="col-lg-8">
          {cart.map((item) => (
            <div
              className="card mb-3"
              key={item.id}
            >
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-9">
                    <h5>{item.title}</h5>

                    <p>Price: ${item.price}</p>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger btn-sm mt-3"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4>Order Summary</h4>

              <h5 className="mt-3">
                Total: ${total.toFixed(2)}
              </h5>

              <button
                className="btn btn-danger w-100 mt-3"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
