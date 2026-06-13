#!/usr/bin/node
// Define the add function that takes two parameters
function add (a, b) {
  return a + b;
}

// Convert the arguments to integers and pass them to the function
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// If no arguments are passed, parseInt returns NaN and add(NaN, NaN) = NaN
console.log(add(a, b));
