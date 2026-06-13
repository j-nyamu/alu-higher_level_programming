#!/usr/bin/node
// Get all arguments and convert them to integers
const args = process.argv.slice(2).map(Number);

// If no arguments or only one argument, print 0
if (args.length <= 1) {
  console.log(0);
} else {
  // Sort in descending order and pick the second element
  args.sort((a, b) => b - a);
  console.log(args[1]);
}
