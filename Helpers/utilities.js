/* eslint-disable no-undef */
/*
    Title:Utilitied module
    Descripttion:To handle json data provied by user
    Author: Apurbo Paul
    Date: 23/02/2024
*/
//dependecies
const crypto = require("crypto");
const { secreteKey } = require("./environments");
// module scaffolding
const utilities = {};

utilities.jsonParse = (str) => {
  let output;
  try {
    output = JSON.parse(str);
  } catch {
    output = {};
  }
  return output;
};

utilities.enctyption = (str) => {
  if (typeof str === "string" && str.length > 0) {
    const hmac = crypto.createHmac("sha256", secreteKey);
    hmac.update(str);
    const output = hmac.digest("hex");
    return output;
  } else {
    return false;
  }
};
module.exports = utilities;
