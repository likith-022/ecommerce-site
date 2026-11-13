
function AboutPage() {
  return (
    <>
      
      <section
        className="container-fluid p-0"
        style={{
          backgroundColor: "#164D3B",
        }}
      >
        <div className="row align-items-center g-0">
          <div className="col-md-6 text-white p-4 p-md-5">
            <p
              className="fw-semibold mb-3"
              style={{
                color: "#C6DDCF",
                letterSpacing: "2px",
              }}
            >
              GET TO KNOW US
            </p>

            <h1 className="fw-bold display-4 mb-3">
              About GLK
            </h1>

            <p className="fs-5">
              Thoughtful Shopping. Better Living.
            </p>

            <p className="text-white-50">
              We believe shopping should be simple,
              enjoyable and inspiring. GLK brings
              together collections that make everyday
              living a little more special.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="/pexels-n-voitkevich-6214360.jpg"
              alt="NOVA shopping collection"
              className="img-fluid w-100"
              style={{
                height: "420px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

     
      <section className="container my-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="public\pexels-cup-of-couple-6956903.jpg"
              alt="Shopping store"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                height: "380px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-6">
            <p
              className="fw-semibold mb-2"
              style={{ color: "#47745E", letterSpacing: "2px" }}
            >
              OUR STORY
            </p>

            <h2
              className="fw-bold mb-4"
              style={{ color: "#164D3B" }}
            >
              Shopping Made Simple
            </h2>

            <p className="text-muted">
              GLK was created with a simple idea:
              make discovering and shopping for everyday
              products easier and more enjoyable.
            </p>

            <p className="text-muted">
              From fashion and beauty to furniture and
              electronics, we bring different collections
              together in one convenient place.
            </p>
          </div>
        </div>
      </section>

     
      <section
        className="py-5"
        style={{ backgroundColor: "#F5F8F5" }}
      >
        <div className="container text-center py-4">
          <p
            className="fw-semibold mb-2"
            style={{ color: "#47745E", letterSpacing: "2px" }}
          >
            WHAT DRIVES US
          </p>

          <h2
            className="fw-bold mb-4"
            style={{ color: "#164D3B" }}
          >
            Our Mission
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            Our mission is to create a convenient shopping
            experience where customers can explore quality
            products, discover new collections and find
            things that suit their everyday needs.
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
              <h5 style={{ color: "#164D3B" }}>
                Wide Collections
              </h5>
              <p className="text-muted mb-0">
                Explore fashion, beauty, furniture and
                electronics in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center p-4 h-100 border rounded-4">
              <h5 style={{ color: "#164D3B" }}>
                Easy Shopping
              </h5>
              <p className="text-muted mb-0">
                Enjoy a simple and convenient way to
                discover your favourite products.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center p-4 h-100 border rounded-4">
              <h5 style={{ color: "#164D3B" }}>
                Everyday Style
              </h5>
              <p className="text-muted mb-0">
                Find products that complement your
                lifestyle and everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
