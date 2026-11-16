import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { categoryData } from "../data/category-data";
import CategoryCard from "../components/category-card";

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="homeCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Carousel Content */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="public/pexels-n-voitkevich-6214365.jpg"
              className="d-block w-100"
              alt="Fashion collection"
              style={{
                height: "450px",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <p className="text-uppercase fw-bold">Discover Our Collection</p>

              <h1 className="display-2 fw-bold">
                Style That <br /> Defines You.
              </h1>

              <p className="fs-5">
                Discover a new way to express yourself with our latest
                collections.
              </p>

              <a href="#collections" className="btn btn-light px-4 py-3 mt-3">
                Explore Collection
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="public/pexels-n-voitkevich-6214476.jpg"
              className="d-block w-100"
              alt="Fashion products"
              style={{
                height: "450px",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <p className="text-uppercase fw-bold">Fresh Arrivals</p>

              <h1 className="display-2 fw-bold">
                Find Your <br /> Perfect Look.
              </h1>

              <p className="fs-5">
                Explore beautiful designs made for your everyday lifestyle.
              </p>

              <a href="#collections" className="btn btn-light px-4 py-3 mt-3">
                Shop Now
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="public/pexels-cup-of-couple-6956903.jpg"
              className="d-block w-100"
              alt="Premium watch collection"
              style={{
                height: "450px",
                objectFit: "cover",
                filter: "brightness(50%)",
              }}
            />

            <div className="carousel-caption text-start mb-5">
              <p className="text-uppercase fw-bold">Premium Collection</p>

              <h1 className="display-2 fw-bold">
                Quality Meets <br /> Elegance.
              </h1>

              <p className="fs-5">
                Find products that combine quality, creativity and elegance.
              </p>

              <a href="#collections" className="btn btn-light px-4 py-3 mt-3">
                Discover More
              </a>
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Categories Section */}
      <section className="container my-5 py-4" id="collections">
        <div className="text-center mb-5">
          <p
            className="fw-semibold mb-2"
            style={{ color: "#47745E", letterSpacing: "2px" }}
          >
            EXPLORE OUR STORE
          </p>

          <h2 className="fw-bold" style={{ color: "#164D3B" }}>
            Shop By Categories
          </h2>

          <p className="text-muted">
            Discover something special from our collections.
          </p>
        </div>

        <div className="row g-4">
          {categoryData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="container-fluid px-4 px-md-5 my-5 text-white">
        <div
          className="rounded-4 p-4 p-md-5"
          style={{
            backgroundImage: `
        linear-gradient(rgba(15, 55, 40, 0.75), rgba(15, 55, 40, 0.75)),
        url("public/pexels-n-voitkevich-6214365.jpg")
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row align-items-center text-white">
            <div className="col-md-9 text-white">
              <p
                className="fw-semibold mb-2"
                style={{ color: "#C6DDCF", letterSpacing: "2px" }}
              >
                THE GLK EXPERIENCE
              </p>

              <h2 className="fw-bold mb-3">Find Something You'll Love.</h2>

              <p className="mb-4 mb-md-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae corporis consequuntur dignissimos dolorem! Adipisci ad
                expedita rerum necessitatibus ex tempora, non molestias
                consectetur accusamus ratione beatae quidem itaque debitis
                cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi sed ad, sunt nemo tenetur porro vitae. Cupiditate
                asperiores quia quae, repellendus nam architecto eligendi, iste
                labore accusamus natus illo repudiandae!
              </p>
            </div>

            <div className="col-md-3 text-md-end mt-4 mt-md-0">
              <a
                href="#collections"
                className="btn btn-light fw-semibold px-4 py-3"
                style={{ color: "#164D3B" }}
              >
                Explore Collections
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ backgroundColor: "#F5F8F5" }}>
        <div className="container text-center py-4">
          <p
            className="fw-semibold mb-2"
            style={{ color: "#47745E", letterSpacing: "2px" }}
          >
            WHAT DRIVES US
          </p>

          <h2 className="fw-bold mb-4" style={{ color: "#164D3B" }}>
            Our Mission
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            Our mission is to create a convenient shopping experience where
            customers can explore quality products, discover new collections and
            find things that suit their everyday needs.
          </p>
        </div>
      </section>

      <section className="container my-5 py-4">
        <div className="text-center mb-5">
          <p
            className="fw-semibold mb-2"
            style={{ color: "#47745E", letterSpacing: "2px" }}
          >
            THE GLK DIFFERENCE
          </p>

          <h2 className="fw-bold" style={{ color: "#164D3B" }}>
            Why Choose GLK?
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center p-4 h-100 border rounded-4">
              <h5 style={{ color: "#164D3B" }}>Wide Collections</h5>
              <p className="text-muted mb-0">
                Explore fashion, beauty, furniture and electronics in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center p-4 h-100 border rounded-4">
              <h5 style={{ color: "#164D3B" }}>Easy Shopping</h5>
              <p className="text-muted mb-0">
                Enjoy a simple and convenient way to discover your favourite
                products.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center p-4 h-100 border rounded-4">
              <h5 style={{ color: "#164D3B" }}>Everyday Style</h5>
              <p className="text-muted mb-0">
                Find products that complement your lifestyle and everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
