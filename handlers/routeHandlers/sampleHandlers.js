/* eslint-disable no-undef */
/*
    Title:Simple path route
    Descripttion:When the routed url will be simple then call the function
    Author: Apurbo Paul
    Date: 26/02/2024
*/
// module scaffolding
const handler = {};

handler.smampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: "This is sample url",
  });
};

module.exports = handler;
