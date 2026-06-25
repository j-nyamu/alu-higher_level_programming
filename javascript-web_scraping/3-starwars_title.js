#!/usr/bin/node
// Print the title of a Star Wars movie by episode ID
const request = require('request');

// First argument is the movie ID
const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

// Fetch the film data and print the title
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  // Parse the JSON body and print the title
  const film = JSON.parse(body);
  console.log(film.title);
});
