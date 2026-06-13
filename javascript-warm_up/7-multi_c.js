#!/usr/bin/node
// Convert the first argument to an integer
const times = parseInt(process.argv[2]);

// If it's not a valid number, print the error message
if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  // Loop and print "C is fun" x times
  let i = 0;
  while (i < times) {
    console.log('C is fun');
    i++;
  }
}
