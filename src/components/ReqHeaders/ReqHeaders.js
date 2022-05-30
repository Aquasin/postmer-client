import React from "react";

const Headers = ({ header, removeHeader, handleHeaderChange }) => {
  return (
    <>
      <div className="input-group my-3">
        <input
          type="text"
          data-key
          className="form-control mx-2 bg-dark text-light"
          placeholder="Key"
          name="key"
          onChange={(e) => handleHeaderChange(e, header.id)}
        />
        <input
          type="text"
          data-value
          className="form-control mx-2 bg-dark text-light"
          placeholder="Value"
          name="value"
          onChange={(e) => handleHeaderChange(e, header.id)}
        />
        <button
          type="button"
          data-remove-btn
          className="btn btn-danger mx-2"
          onClick={() => removeHeader(header)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Headers;
