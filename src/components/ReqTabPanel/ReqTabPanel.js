import React from "react";
import QueryParams from "../QueryParams/QueryParams";
import ReqHeaders from "../ReqHeaders/ReqHeaders";

const TabPanel = ({
  querys,
  addQuery,
  removeQuery,
  handleQueryChange,
  reqHeaders,
  addHeader,
  removeHeader,
  handleHeaderChange,
  reqBody,
  handleBodyChange,
}) => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item mb-2" role="presentation">
          <button
            className="nav-link active text-light"
            id="query-params-tab "
            data-bs-toggle="tab"
            data-bs-target="#query-params"
            type="button"
            role="tab"
          >
            Query Params
          </button>
        </li>
        <li className="nav-item mb-2" role="presentation">
          <button
            className="nav-link text-light"
            id="request-headers-tab"
            data-bs-toggle="tab"
            data-bs-target="#request-headers"
            type="button"
            role="tab"
          >
            Headers
          </button>
        </li>
        <li className="nav-item mb-2" role="presentation">
          <button
            className="nav-link text-light"
            id="req-body-tab"
            data-bs-toggle="tab"
            data-bs-target="#req-body"
            type="button"
            role="tab"
          >
            Body
          </button>
        </li>
      </ul>

      <div className="tab-content p-3 border-top-0 border">
        <div
          className="tab-pane fade show active"
          id="query-params"
          role="tabpanel"
        >
          <div className="" data-query-params>
            {querys.map((query) => {
              return (
                <QueryParams
                  key={query.id}
                  query={query}
                  removeQuery={removeQuery}
                  handleQueryChange={handleQueryChange}
                ></QueryParams>
              );
            })}
          </div>
          <button
            className="mt-2 btn bg-success text-light"
            type="button"
            onClick={addQuery}
          >
            Add Query
          </button>
        </div>
        <div className="tab-pane fade" id="request-headers" role="tabpanel">
          <div className="" data-request-headers>
            {reqHeaders.map((header) => {
              return (
                <ReqHeaders
                  key={header.id}
                  header={header}
                  removeHeader={removeHeader}
                  handleHeaderChange={handleHeaderChange}
                ></ReqHeaders>
              );
            })}
          </div>
          <button
            className="mt-2 btn bg-success text-light"
            type="button"
            onClick={addHeader}
          >
            Add Header
          </button>
        </div>
        <div className="tab-pane fade" id="req-body" role="tabpanel">
          <div
            className="overflow-auto"
            style={{ maxHeight: "200px" }}
            data-json-request-body
          >
            <textarea
              cols="100"
              rows="5"
              style={{ width: "100%" }}
              value={reqBody}
              name="body"
              onChange={handleBodyChange}
              spellCheck="false"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabPanel;
