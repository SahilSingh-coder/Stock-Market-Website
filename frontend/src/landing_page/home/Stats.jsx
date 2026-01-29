import React from "react";

function Stats() {
  return (
    <div className="container py-4">
      <div className="row py-5 align-items-center">
        
        {/* Left Column — Text */}
        <div className="col-12 col-md-6 px-4 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4 fw-semibold">Trust with confidence</h1>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5 fw-semibold">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 fw-semibold">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fw-semibold">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Column — Image & Links */}
        <div className="col-12 col-md-6 px-4 text-center">
          <img
            src="images/ecosystem.png"
            alt="Zerodha ecosystem visual"
            className="img-fluid mb-3"
          />

          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-decoration-none fw-semibold">
              Explore our products <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Try Kite demo <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
