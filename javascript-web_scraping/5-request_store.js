#!/usr/bin/node
// Fetch a webpage and store the body in a file
const request = require('request');
const fs = require('fs');

// First argument is the URL, second is the file path
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request and write the body to the file
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  // Write response body to file in utf-8
  fs.writeFile(filePath, body, 'utf-8', function (err) {
    if (err) {
      console.log(err);
    }
  });
});
