#!/usr/bin/node
// Recursive function to compute factorial
// Base case: factorial of 0 or NaN is 1
function factorial (n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
