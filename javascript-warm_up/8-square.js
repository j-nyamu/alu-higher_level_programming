#!/usr/bin/node
// Convert the first argument to an integer for the square size
const size = parseInt(process.argv[2]);

// If conversion fails, print missing size message
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Outer loop controls the rows
  for (let i = 0; i < size; i++) {
    // Inner loop builds each row as a string of X's
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
