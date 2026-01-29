import React from "react";

function Team() {
  return (
    <div className="container my-5">
      
      {/* Heading */}
      <div className="row border-top pt-4">
        <h2 className="text-center fw-semibold">People</h2>
      </div>

      {/* Team Section */}
      <div className="row text-muted py-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        
        {/* Image + Name */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle mb-4"
            style={{ width: "50%", objectFit: "cover" }}
          />
          <h4 className="fw-semibold">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder & CEO</h6>
        </div>

        {/* Bio */}
        <div className="col-12 col-md-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long career as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="mb-0">
            Connect on{" "}
            <a href="#" className="text-decoration-none fw-semibold">Homepage</a>{" "}
            / <a href="#" className="text-decoration-none fw-semibold">TradingQnA</a>{" "}
            / <a href="#" className="text-decoration-none fw-semibold">Twitter</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
