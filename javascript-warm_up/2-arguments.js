#!/usr/bin/node
// process.argv is an array of command line arguments
// process.argv[0] = node, process.argv[1] = script name
// so actual arguments start at index 2
const args = process.argv.slice(2);

// Check how many arguments were passed
if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
