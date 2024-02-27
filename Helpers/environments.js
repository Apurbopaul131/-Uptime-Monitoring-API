/* eslint-disable no-undef */
/*
    Title:Environments
    Descripttion: To handle all environment variable
    Author: Apurbo Paul
    Date: 25/02/2024
*/
// Module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
};
environments.production = {
  port: 5000,
  envName: "production",
};

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const exportedEnvironmentObj =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;
// module export
module.exports = exportedEnvironmentObj;
