/* eslint-disable no-undef */
/*
    Title:user path route
    Descripttion:When the routed url will be user then call the function
    Author: Apurbo Paul
    Date: 23/02/2024
*/
//Dependencies
const callgetMethod = require("../../Helpers/handlegetMethod");
const callPostMethod = require("../../Helpers/handlePostMethod");
const callPutMethod = require("../../Helpers/handlePutMethod");
const callDeleteMethod = require("../../Helpers/handleDeleteMethod");
// module scaffolding
const handler = {};
handler._user = {
  get: callgetMethod,
  post: callPostMethod,
  put: callPutMethod,
  delete: callDeleteMethod,
};

// Define the userHandler function
handler.userHandler = (reqObjproperties, callback) => {
  const acceptMethod = ["get", "post", "put", "delete"];
  if (acceptMethod.includes(reqObjproperties.method)) {
    handler._user[reqObjproperties.method](reqObjproperties, callback);
  } else {
    callback(405, {
      message: "Method not allowed",
    });
  }
};

module.exports = handler;
