import React from "react";

const QueryParams = ({ query, removeQuery, handleQueryChange }) => {
  return (
    <>
      <div className="input-group my-3">
        <input
          type="text"
          data-key
          className="form-control mx-2 bg-dark text-light"
          placeholder="Key"
          name="key"
          onChange={(e) => handleQueryChange(e, query.id)}
        />
        <input
          type="text"
          data-value
          className="form-control mx-2 bg-dark text-light"
          placeholder="Value"
          name="value"
          onChange={(e) => handleQueryChange(e, query.id)}
        />
        <button
          type="button"
          data-remove-btn
          className="btn btn-danger mx-2"
          onClick={() => removeQuery(query)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default QueryParams;
