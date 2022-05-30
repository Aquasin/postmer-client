import React from "react";

const ResTabPanel = ({ status, time, size, resString, resHeaders }) => {
  return (
    <>
      {status && (
        <div className="mt-5">
          <div className="d-flex my-2 justify-content-between text-light">
            <h3>Response</h3>
            <div className="d-flex">
              <div className="me-3">
                Status: <span>{status}</span>
              </div>
              <div className="me-3">
                Time: <span>{time}</span>ms
              </div>
              <div className="me-3">
                Size: <span>{size}</span>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs " role="tablist">
            <li className="nav-item mb-2" role="presentation">
              <button
                className="nav-link active text-light"
                id="res-body-tab"
                data-bs-toggle="tab"
                data-bs-target="#res-body"
                type="button"
                role="tab"
              >
                Body
              </button>
            </li>
            <li className="nav-item mb-2" role="presentation">
              <button
                className="nav-link text-light"
                id="response-headers-tab"
                data-bs-toggle="tab"
                data-bs-target="#response-headers"
                type="button"
                role="tab"
              >
                Headers
              </button>
            </li>
          </ul>

          <div className="tab-content p-3 border-top-0 border">
            <div
              className="tab-pane fade show active"
              id="res-body"
              role="tabpanel"
            >
              <div
                className="overflow-auto text-light"
                style={{ maxHeight: "200px" }}
              >
                <pre>{resString}</pre>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="response-headers"
              role="tabpanel"
            >
              <div
                className="text-light"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "5rem 2rem",
                }}
              >
                <div>
                  {resHeaders.map((header, index) => {
                    return <div key={index}>{Object.keys(header)[0]}</div>;
                  })}
                </div>
                <div>
                  {resHeaders.map((header, index) => {
                    return (
                      <div key={index}>{header[Object.keys(header)[0]]}</div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResTabPanel;
