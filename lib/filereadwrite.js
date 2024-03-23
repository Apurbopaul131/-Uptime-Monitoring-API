/* eslint-disable no-undef */
/*
    Title:Write file
    Descripttion: create a new file to write data to the file
    Author: Apurbo Paul
    Date: 27/02/2024
*/
//Dependencies
const fs = require("fs");
const path = require("path");

//Module scaffholding
const lib = {};

lib.baseDir = path.join(`${__dirname}`, "../.data/");
lib.create = (dir, file, data, callback) => {
  console.log(data);
  console.log(typeof data);
  const fullpath = lib.baseDir + dir + "/" + file + ".json";
  const stringyfyData = JSON.stringify(data);
  fs.open(fullpath, "wx", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      fs.writeFile(fileDescriptor, stringyfyData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback("error occured when closing file");
            }
          });
        } else {
          callback("errror generate when writing file");
        }
      });
    } else {
      callback("error occured for file creating, it may exists...");
    }
  });
};

lib.read = (dir, file, callback) => {
  fs.readFile(lib.baseDir + dir + "/" + file + ".json", "utf8", (err, data) => {
    if (!err && data) {
      callback(err, data);
    } else {
      callback("file can not read properly");
    }
  });
};
lib.update = (dir, file, data, callback) => {
  fs.open(
    lib.baseDir + dir + "/" + file + ".json",
    "r+",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        fs.truncate(lib.baseDir + dir + "/" + file + ".json", 0, (err) => {
          if (!err) {
            const stringyfyData = JSON.stringify(data);
            fs.writeFile(
              lib.baseDir + dir + "/" + file + ".json",
              stringyfyData,
              (err) => {
                if (!err) {
                  callback(false);
                } else {
                  callback("error ocuured when write the file");
                }
              }
            );
          } else {
            callback("Error ocuured when truncate the file contents...");
          }
        });
      } else {
        callback("Error occured in file opening...");
      }
    }
  );
};
lib.delete = (dir, file, callback) => {
  fs.unlink(lib.baseDir + dir + "/" + file + ".json", (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("file can not delete successfully...");
    }
  });
};
module.exports = lib;
