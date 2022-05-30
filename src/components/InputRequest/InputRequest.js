import React from "react";

const InputRequest = ({ urlobject, handleChange }) => {
  return (
    <>
      <div className="input-group mb-4">
        <select
          className="form-select custom-select flex-grow-0 w-auto bg-dark text-light"
          defaultValue={urlobject.method}
          name="method"
          onChange={handleChange}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        <input
          required
          name="url"
          className="form-control bg-dark text-light"
          type="url"
          placeholder="https://example.com"
          value={urlobject.url}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn rounded-3 btn-primary ms-3 border-0"
          style={{ backgroundColor: "#ff4500" }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default InputRequest;
