#!/usr/bin/node
// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Print in the format: "arg1 is arg2"
// If an argument is missing it will print undefined - that is expected
console.log(`${arg1} is ${arg2}`);
