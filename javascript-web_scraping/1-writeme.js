#!/usr/bin/node
// Write a string to a file using the fs module
const fs = require('fs');

// First argument is the file path, second is the string to write
const filePath = process.argv[2];
const content = process.argv[3];

// Write content to file in utf-8 encoding
fs.writeFile(filePath, content, 'utf-8', function (err) {
  // If error occurred, print the error object
  if (err) {
    console.log(err);
  }
});
