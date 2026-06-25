#!/usr/bin/node
// Compute the number of completed tasks per user ID
const request = require('request');

// First argument is the API URL
const url = process.argv[2];

// Fetch todos and count completed tasks per user
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    return;
  }
  const todos = JSON.parse(body);
  const completed = {};

  // Loop through todos and count completed ones per user
  for (const todo of todos) {
    if (todo.completed === true) {
      if (completed[todo.userId] === undefined) {
        completed[todo.userId] = 0;
      }
      completed[todo.userId]++;
    }
  }
  console.log(completed);
});
