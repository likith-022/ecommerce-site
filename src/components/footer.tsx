
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#174b38" }} className="text-white mt-5">

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">

            <h2 className="fw-bold">
              GLK<span style={{ color: "#c46c45" }}>.</span>
            </h2>

            <p className="text-white-50 mt-3">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus animi inventore nobis aliquam 
            </p>
          </div>

         
          <div className="col-lg-2 col-md-6">

            <h5 className="fw-bold mb-4">Quick Links</h5>

            <ul className="list-unstyled">

              <li className="mb-3">
                <p className="text-white-50 text-decoration-none">
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </p>
              </li>

              <li className="mb-3">
                <p className="text-white-50 text-decoration-none">
                  <i className="bi bi-shop me-2"></i>
                  Shop
                </p>
              </li>

              <li className="mb-3">
                <p className="text-white-50 text-decoration-none">
                  <i className="bi bi-grid me-2"></i>
                  Collections
                </p>
              </li>

              <li className="mb-3">
                <p className="text-white-50 text-decoration-none">
                  <i className="bi bi-info-circle me-2"></i>
                  About Us
                </p>
              </li>

            </ul>

          </div>

          
          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-4">Customer Support</h5>

            <ul className="list-unstyled">

              <li className="mb-3">
                <Link to="/contact" className="text-white-50 text-decoration-none">
                  <i className="bi bi-headset me-2"></i>
                  Contact Us
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/faq" className="text-white-50 text-decoration-none">
                  <i className="bi bi-question-circle me-2"></i>
                  FAQs
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/shipping" className="text-white-50 text-decoration-none">
                  <i className="bi bi-truck me-2"></i>
                  Shipping Information
                </Link>
              </li>

              <li className="mb-3">
                <Link to="/returns" className="text-white-50 text-decoration-none">
                  <i className="bi bi-arrow-left-right me-2"></i>
                  Returns & Refunds
                </Link>
              </li>

            </ul>

          </div>

        
          <div className="col-lg-3 col-md-6">

            <h5 className="fw-bold mb-4">Get In Touch</h5>

            <p className="text-white-50">
              <i className="bi bi-envelope me-2"></i>
              support@store.com
            </p>

            <p className="text-white-50">
              <i className="bi bi-telephone me-2"></i>
              +91 123456789
            </p>

            <p className="text-white-50">
              <i className="bi bi-geo-alt me-2"></i>
              India
            </p>

          </div>

        </div>

        {/* Bottom Footer */}
        <hr className="border-secondary my-4" />

       

          <div className="text-center ">
            <p className="text-white-50 mb-0">
              © 2026 Store. All rights reserved.
            </p>
          </div>


        </div>

     
    </footer>
  );
};

export default Footer;
