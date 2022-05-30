import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import InputRequest from "../components/InputRequest/InputRequest";
import ReqTabPanel from "../components/ReqTabPanel/ReqTabPanel";
import ResTabPanel from "../components/ResTabPanel/ResTabPanel";

const Main = () => {
  const [urlobject, setUrlobject] = useState({
    method: "GET",
    url: "http://localhost:5000/api/v1",
  });
  const [querys, setQuerys] = useState([]);
  const [reqHeaders, setReqHeaders] = useState([]);
  const [reqBody, setReqBody] = useState("");
  const [resObject, setResObject] = useState({
    status: "",
    time: "",
    size: "",
    resString: "",
    resHeaders: [],
  });

  const handleChange = (e) => {
    setUrlobject({
      ...urlobject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(querys);
    const params = new URLSearchParams();
    querys.map((query) => {
      return params.append(query.key, query.value);
    });

    const headers = reqHeaders.reduce((data, pair) => {
      if (pair.key === "") return data;
      return { ...data, [pair.key]: pair.value };
    }, {});

    //* For POST data
    let data;
    try {
      if (reqBody !== "") data = JSON.parse(reqBody.toString());
    } catch (e) {
      console.log(e);
      alert("JSON data is malformed");
      return;
    }

    let start = new Date();
    axios({
      method: urlobject.method,
      url: urlobject.url,
      params,
      headers: headers,
      data,
    }).then((res) => {
      let end = new Date();
      const headerArray = [];
      for (let [key, value] of Object.entries(res.headers)) {
        headerArray.push({ [key]: value });
      }
      console.log(headerArray);
      setResObject({
        status: res.status,
        time: end.getTime() - start.getTime(),
        size: `${
          JSON.stringify(res.data).length + JSON.stringify(res.headers).length
        }B`,
        resString: JSON.stringify(res.data, null, 4),
        resHeaders: headerArray,
      });
    });
    console.log(resObject);
  };

  const addQuery = () => {
    const query = {
      id: uuidv4(),
      key: "",
      value: "",
    };
    setQuerys([...querys, query]);
  };

  const handleQueryChange = (e, id) => {
    // console.log(e.target);
    // console.log(id);
    let queryNew = querys.map((query) => {
      if (query.id === id) {
        return { ...query, [e.target.name]: e.target.value };
      }
      return query;
    });
    setQuerys(queryNew);
  };

  const removeQuery = (key) => {
    setQuerys(querys.filter((query) => query.id !== key.id));
  };

  const addHeader = () => {
    const header = {
      id: uuidv4(),
      key: "",
      value: "",
    };
    setReqHeaders([...reqHeaders, header]);
  };

  const handleHeaderChange = (e, id) => {
    let headerNew = reqHeaders.map((header) => {
      if (header.id === id) {
        return { ...header, [e.target.name]: e.target.value };
      }
      return header;
    });
    setReqHeaders(headerNew);
  };

  const removeHeader = (key) => {
    setReqHeaders(reqHeaders.filter((header) => header.id !== key.id));
  };

  const handleBodyChange = (e) => {
    setReqBody(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="text-light text-center mb-4">HTTP Postmer Client</h1>
            <form onSubmit={handleSubmit}>
              <InputRequest
                urlobject={urlobject}
                handleChange={handleChange}
              ></InputRequest>
              <ReqTabPanel
                querys={querys}
                addQuery={addQuery}
                removeQuery={removeQuery}
                handleQueryChange={handleQueryChange}
                reqHeaders={reqHeaders}
                addHeader={addHeader}
                removeHeader={removeHeader}
                handleHeaderChange={handleHeaderChange}
                reqBody={reqBody}
                handleBodyChange={handleBodyChange}
              ></ReqTabPanel>
            </form>
            <ResTabPanel
              status={resObject.status}
              time={resObject.time}
              size={resObject.size}
              resString={resObject.resString}
              resHeaders={resObject.resHeaders}
            ></ResTabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
