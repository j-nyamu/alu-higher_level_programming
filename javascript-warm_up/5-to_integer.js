#!/usr/bin/node
// parseInt tries to convert the argument to an integer
// If it cannot convert, it returns NaN (Not a Number)
const num = parseInt(process.argv[2]);

// isNaN checks if the value is NaN
if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
