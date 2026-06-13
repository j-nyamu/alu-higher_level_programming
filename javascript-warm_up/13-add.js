#!/usr/bin/node
// Define the add function
function add (a, b) {
  return a + b;
}

// Export the function so other files can import it using require()
exports.add = add;
