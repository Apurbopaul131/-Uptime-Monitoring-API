/* eslint-disable no-undef */
/*
    Title:Handle put method from user request
    Descripttion:When call by pust method from user
    Author: Apurbo Paul
    Date: 23/03/2024
*/
const callDeleteMethod = (reqObj, callback) => {
  callback(200, {
    massage: "This is delete method worked successfylly",
  });
};
module.exports = callDeleteMethod;
