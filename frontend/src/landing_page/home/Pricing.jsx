import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        {/* Left content */}
        <div className="col-12 col-md-5 mb-4">
          <h2 className="mb-3 fs-2 fw-semibold">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            See Pricing <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Pricing Boxes */}
        <div className="col-12 col-md-7 mb-5">
          <div className="row text-center g-0">
            <div className="col-6 p-4 border">
              <h2 className="mb-2 fw-bold">₹0</h2>
              <p className="mb-0 text-muted">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>

            <div className="col-6 p-4 border">
              <h2 className="mb-2 fw-bold">₹20</h2>
              <p className="mb-0 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
