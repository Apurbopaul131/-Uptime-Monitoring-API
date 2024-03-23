/* eslint-disable no-undef */
/*
    Title:Handle post method from user request
    Descripttion:When call by post method from user
    Author: Apurbo Paul
    Date: 23/03/2024
*/
//dependencies
const lib = require("../lib/filereadwrite");
const { enctyption } = require("./utilities");
const callPostMethod = (reqObj, callback) => {
  // Check the validity of idevisual data that provied by user
  const firstName = /^[a-zA-Z]{3,30}$/.test(reqObj.body.firstName)
    ? reqObj.body.firstName
    : false;
  const lastName = /^[a-zA-Z]{3,30}$/.test(reqObj.body.lastName)
    ? reqObj.body.lastName
    : false;
  const passoword =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      reqObj.body.password
    )
      ? reqObj.body.password
      : false;
  const phoneNumber = /^(\+?88)?01[0-9]{9}$/.test(reqObj.body.phoneNumber)
    ? reqObj.body.phoneNumber
    : false;
  const setArgument =
    typeof reqObj.body.setArgument === "boolean" && reqObj.body.setArgument
      ? reqObj.body.setArgument
      : false;

  if (firstName && lastName && passoword && setArgument && phoneNumber) {
    lib.read("user", phoneNumber, (err, data) => {
      if (err) {
        const userProperties = {
          firstName,
          lastName,
          phoneNumber,
          setArgument,
          password: enctyption(passoword),
        };
        lib.create("user", phoneNumber, userProperties, (err2) => {
          if (err2) {
            callback(500, {
              massage: "Does create user",
            });
          } else {
            callback(200, {
              massage: "User created successfully",
            });
          }
        });
      } else {
        callback(500, {
          massage: "This is server side error",
        });
      }
    });
  } else {
    callback(400, {
      massage: "user data is not valid!",
    });
  }
};
module.exports = callPostMethod;
