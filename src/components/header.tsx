import { Link } from "react-router";
import useCartStore from "../store/cart-store";
import useAuthStore from "../store/auth-store";

const Header = () => {
  const username = useAuthStore((state) => state.username);
  const email = useAuthStore((state) => state.email);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <header>
      <nav className="navbar navbar-expand-lg py-3 bg-white">
        <div className="container">
          <div
            className="navbar-brand fw-bold fs-2"
            style={{ color: "#063423" }}
          >
            GLK<span style={{ color: "#c46c45" }}>.</span>
            <small
              className="d-block text-secondary"
              style={{ fontSize: "10px", letterSpacing: "3px" }}
            >
              THE SHOPPING STORE
            </small>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#novaNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <div className="navbar-nav mx-auto gap-lg-4 mt-3 mt-lg-0">
              <Link to="/" className="nav-link fw-semibold">
                <i className="bi bi-house-door me-2"></i>
                Home
              </Link>

              <Link to="/products" className="nav-link">
                <i className="bi bi-grid-3x3-gap me-2"></i>
                Collections
              </Link>

              <Link to="/about" className="nav-link">
                <i className="bi bi-info-circle me-2"></i>
                About
              </Link>
            </div>

            <div className="d-flex align-items-center gap-3 ">
              
              {isLoggedIn ? (
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle fw-semibold"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#174b38" }}
                  >
                    <i className="bi bi-person-circle me-1"></i>
                    Login
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end p-3 shadow">
                    <li>
                      <h6 className="dropdown-header fw-bold">My Account</h6>
                    </li>

                    <li className="px-3 py-2">
                      <small className="text-muted">Username</small>
                      <p className="mb-2 fw-semibold">{username}</p>

                      <small className="text-muted">Email</small>
                      <p className="mb-0 fw-semibold">{email}</p>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={logout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "#174b38" }}
                >
                  <i className="bi bi-person-circle me-1"></i>
                  Login
                </Link>
              )}

              <Link
                to="/cart"
                className="btn rounded-pill px-4 text-white"
                style={{ backgroundColor: "#174b38" }}
              >
                <i className="bi bi-bag me-2"></i>
                Cart ({totalItems})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
