/* eslint-disable no-undef */
/*
    Title:Handle post method from user request
    Descripttion:When call by post method from user
    Author: Apurbo Paul
    Date: 23/03/2024
*/
const callgetMethod = (reqObj, callback) => {
  console.log(reqObj);
  callback(200, {
    massage: "This is get method worked successfylly",
  });
};
module.exports = callgetMethod;
