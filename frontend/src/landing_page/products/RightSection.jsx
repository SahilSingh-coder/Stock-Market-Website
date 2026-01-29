import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore = "#",
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Text Section */}
        <div className="col-12 col-md-6 p-4">
          <h2 className="fw-semibold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore} className="fw-semibold text-decoration-none">
            Learn More →
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
