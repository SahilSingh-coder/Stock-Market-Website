import React from "react";

function CreateTicket() {
  const ticketTopics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  // Number of columns to show
  const columns = 6; // change to 3, 4, or 6 based on design

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 gy-4">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {[...Array(columns)].map((_, i) => (
          <div className="col-12 col-md-6 col-lg-4 p-4" key={i}>
            <h4 className="mb-3">
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
              Account Opening
            </h4>
            <div className="d-flex flex-column">
              {ticketTopics.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-decoration-none mb-2"
                  style={{ lineHeight: "1.8" }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
