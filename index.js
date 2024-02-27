/* eslint-disable no-undef */
/*
    Title:Uptime motoring Application
    Descripttion: A Restful api to monitor up or down of user defined times
    Author: Apurbo Paul
    Date: 25/02/2024
*/

// Dependencies
const http = require("http");
const { handleReqRes } = require("./Helpers/handleReqRes");
const processEnvironment = require("./Helpers/environments");

// App object - module Sacffholding
const app = {};

// app.config = {
//   port: 3000,
// };
//create server
app.createServer = () => {
  //Destructer app.config object property
  //   const { port } = app.config;
  const server = http.createServer(handleReqRes);
  server.listen(processEnvironment.port);
  console.log(`server lisening on port ${processEnvironment.port}`);
};

//handle request and response
// app.handleReqRes = handleReqRes;

// function calling
app.createServer();
