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
// const data = require("./lib/filereadwrite");

// App object - module Sacffholding
const app = {};

// //testing the file system
// data.delete("test", "myFile", (err) => {
//   console.log("Typeof:" + err);
// });

//testing read file system
// readData.read("test", "myFile", (err4) => {
//   console.log("error event is:" + err4);
// });

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
