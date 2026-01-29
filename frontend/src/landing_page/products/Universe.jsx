import React from "react";

function Universe() {
  const platforms = [
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
    { img: "images/smallcaseLogo.png", text: "Thematic investment platform" },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fw-semibold">The Zerodha Universe</h1>
        <p className="text-muted mb-4">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {platforms.map((item, idx) => (
          <div className="col-12 col-md-4 p-3" key={idx}>
            <img src={item.img} alt="Platform Logo" className="img-fluid mb-2" />
            <p className="small text-muted">{item.text}</p>
          </div>
        ))}

        <div className="mt-4">
          <button className="btn btn-primary fs-5 px-4 py-2">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
