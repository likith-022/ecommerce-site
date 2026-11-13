import { Link } from "react-router";
const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg py-3 bg-white"
        
      >
        <div className="container">
          <div className="navbar-brand fw-bold fs-2"style={{ color: "#063423" }}>

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

          <div className="collapse navbar-collapse" >
           
            <div className="navbar-nav mx-auto gap-lg-4 mt-3 mt-lg-0">
              <Link to="/"  className="nav-link fw-semibold">
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

            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <p className="text-decoration-none fw-semibold"
                style={{ color: "#174b38" }}
              >
                <i className="bi bi-person me-1"></i>
                Login
              </p>

              <p className="btn rounded-pill px-4 text-white"
                style={{ backgroundColor: "#174b38" }}
              >
                <i className="bi bi-bag me-2"></i>
                Cart
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
