import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 text-center">
      <div className="row justify-content-center">
        <div className="col-12">
          <img 
            src="images/homeHero.png" 
            alt="Hero" 
            className="img-fluid mb-4"
          />
        </div>

        <div className="col-12">
          <h1 className="mt-3 fw-bold">Invest in everything</h1>
          <p className="fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>

          <button className="btn btn-primary fs-5 px-4 py-2">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
