#!/usr/bin/node
// Count the number of movies where Wedge Antilles (character ID 18) appears
const request = require('request');

// First argument is the API URL
const url = process.argv[2];

// Fetch all films and filter by character ID 18
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  // Count films where character URL contains ID 18
  let count = 0;
  for (const film of data.results) {
    for (const character of film.characters) {
      if (character.includes('/18/')) {
        count++;
      }
    }
  }
  console.log(count);
});
