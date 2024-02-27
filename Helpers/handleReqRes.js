/* eslint-disable no-undef */
/*
    Title:Handle all request and response
    Descripttion: This funcion handle request and response of the serer
    Author: Apurbo Paul
    Date: 26/02/2024
*/
//Dependincies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandlers/handleNotfound");

//Module Scaffholding
const reqResmodule = {};

// this function handle request and resopnse
reqResmodule.handleReqRes = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimedPath = path.replace(/^\/|\/$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObj = parseUrl.query;
  const headerObj = req.headers;

  const requestProperties = {
    parseUrl,
    trimedPath,
    method,
    queryStringObj,
    headerObj,
  };

  const decoder = new StringDecoder("utf8");
  let realData = "";

  const choosenHandler = routes[trimedPath]
    ? routes[trimedPath]
    : notFoundHandler;

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    choosenHandler(requestProperties, (statusCode, payload) => {
      let setStatusCode = statusCode;
      let setPayload = payload;
      setStatusCode = typeof setStatusCode === "number" ? setStatusCode : 500;
      setPayload = typeof setPayload === "object" ? setPayload : {};
      const payLoadString = JSON.stringify(setPayload);
      // send final response
      res.writeHead(setStatusCode);
      res.end(payLoadString);
    });
  });
};
// export module
module.exports = reqResmodule;
