import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row text-start">
          
          {/* Logo & intro */}
          <div className="col-12 col-md-3 mb-4">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ width: "140px" }}
            />
            <p className="mt-3 text-muted small">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Company</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/about" className="text-decoration-none text-muted">About</Link>
              <Link to="/product" className="text-decoration-none text-muted">Products</Link>
              <Link to="/pricing" className="text-decoration-none text-muted">Pricing</Link>
              <a href="#" className="text-decoration-none text-muted">Referral programme</a>
              <a href="#" className="text-decoration-none text-muted">Careers</a>
              <a href="#" className="text-decoration-none text-muted">Zerodha.tech</a>
              <a href="#" className="text-decoration-none text-muted">Press & media</a>
              <a href="#" className="text-decoration-none text-muted">Zerodha cares (CSR)</a>
            </div>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Support</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/support" className="text-decoration-none text-muted">Contact</Link>
              <a href="#" className="text-decoration-none text-muted">Support portal</a>
              <a href="#" className="text-decoration-none text-muted">Z-Connect blog</a>
              <a href="#" className="text-decoration-none text-muted">List of charges</a>
              <a href="#" className="text-decoration-none text-muted">Downloads & resources</a>
            </div>
          </div>

          {/* Account */}
          <div className="col-6 col-md-3 mb-4">
            <p className="fw-semibold">Account</p>
            <div className="d-flex flex-column gap-1">
              <Link to="/signup" className="text-decoration-none text-muted">Open an account</Link>
              <a href="#" className="text-decoration-none text-muted">Fund transfer</a>
              <a href="#" className="text-decoration-none text-muted">60 day challenge</a>
            </div>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="text-muted small mt-4" style={{ lineHeight: "1.5" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633.
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
            Commodity services through Zerodha Commodities Pvt. Ltd. – MCX: 46025.
          </p>

          <p>
            For complaints, write to complaints@zerodha.com. Read all related risk documents before investing.
          </p>

          <p>
            Procedure to raise complaints on SEBI SCORES portal: Provide mandatory details and track redressal online.
          </p>

          <p>
            Investments in securities market are subject to market risks; please read all documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
