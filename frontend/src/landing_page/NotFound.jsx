import React from "react";

function NotFound() {
  return (
    <div className="container py-5 mb-5 d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
      <div className="text-center">
        <h1 className="display-4 fw-bold">404</h1>
        <h2 className="mt-2">Page Not Found</h2>
        <p className="text-muted">
          Sorry, the page you are looking for does not exist or may have been moved.
        </p>

        <a href="/" className="btn btn-primary mt-3 px-4 py-2">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
