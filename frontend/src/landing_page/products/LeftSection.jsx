import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo = "#",
  learnMore = "#",
  googlePlay = "#",
  appStore = "#",
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} alt={productName} className="img-fluid mt-3" />
        </div>

        {/* Text + CTA Section */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="fw-semibold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="d-flex gap-4 mt-2">
            <a href={tryDemo} className="fw-semibold text-decoration-none">
              Try Demo →
            </a>
            <a href={learnMore} className="fw-semibold text-decoration-none">
              Learn More →
            </a>
          </div>

          <div className="d-flex gap-4 mt-4">
            <a href={googlePlay}>
              <img
                src="images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
                style={{ maxWidth: "140px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                alt="Download on App Store"
                className="img-fluid"
                style={{ maxWidth: "140px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
