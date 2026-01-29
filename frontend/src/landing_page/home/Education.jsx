import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="images/education.svg"
            alt="Education illustration"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h2 className="fs-2 fw-semibold mb-3">Free and open market education</h2>
          
          <p className="text-muted">
            Varsity, the largest online stock market education platform in the world,
            covering everything from basics to advanced trading.
          </p>
          
          <a href="#" className="text-decoration-none fw-semibold d-inline-block mb-4">
            Varsity <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="text-muted mt-3">
            TradingQ&A, the most active trading and investment community in India
            for all your market-related queries.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            TradingQ&A <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
