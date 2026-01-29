import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Left image section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="images/largestBroker.svg"
            alt="Largest broker illustration"
            className="img-fluid"
          />
        </div>

        {/* Text + List Section */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="fw-semibold">Largest stock broker in India</h2>
          <p className="mb-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="text-muted">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="text-muted">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="images/pressLogos.png"
            alt="Press coverage logos"
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
