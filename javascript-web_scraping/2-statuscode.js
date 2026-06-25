#!/usr/bin/node
// Display the status code of a GET request using the request module
const request = require('request');

// First argument is the URL
const url = process.argv[2];

// Make a GET request and print the status code
request(url, function (err, response) {
  if (err) {
    console.log(err);
    return;
  }
  // Print status code in required format
  console.log('code: ' + response.statusCode);
});
