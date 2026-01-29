import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Links Row */}
      <div className="d-flex justify-content-between align-items-center p-4" id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>
        <a href="#" className="text-decoration-none fw-semibold">Track Tickets</a>
      </div>

      {/* Content Section */}
      <div className="row px-5 py-4 mx-1">
        
        {/* Search & Quick Links */}
        <div className="col-12 col-lg-6 p-3">
          <h2 className="fs-4 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <input
            placeholder="Eg. how do I activate F&O"
            aria-label="Search query"
            className="mb-3"
          />

          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Track account opening</a>
            <a href="#" className="text-decoration-none">Track segment activation</a>
            <a href="#" className="text-decoration-none">Intraday margins</a>
            <a href="#" className="text-decoration-none">Kite user manual</a>
          </div>
        </div>

        {/* Featured Section */}
        <div className="col-12 col-lg-6 p-3">
          <h2 className="fs-4 mb-3">Featured</h2>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="#" className="text-decoration-none">
                Current Takeovers and Delisting — January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Latest Intraday leverages — MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
