/* eslint-disable no-undef */
/*
    Title:Handle put method from user request
    Descripttion:When call by pust method from user
    Author: Apurbo Paul
    Date: 23/03/2024
*/
const callPutMethod = (reqObj, callback) => {
  callback(200, {
    massage: "This is put method worked successfylly",
  });
};
module.exports = callPutMethod;
