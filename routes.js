/* eslint-disable no-undef */
/*
    Title:Route
    Descripttion: Handle all routed url
    Author: Apurbo Paul
    Date: 26/02/2024
*/
// Dependencies
const { smampleHandler } = require("./handlers/routeHandlers/sampleHandlers");
// module scaffolding
const routes = {
  sample: smampleHandler,
};

module.exports = routes;
