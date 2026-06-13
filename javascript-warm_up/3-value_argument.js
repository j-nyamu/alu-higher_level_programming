#!/usr/bin/node
// Get the first actual argument (index 2 in process.argv)
const arg = process.argv[2];

// If nothing was passed, arg will be undefined
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
