t fs = require('fs');

// First argument is the file path
const filePath = process.argv[2];

// Read the file in utf-8 encoding
fs.readFile(filePath, 'utf-8', function (err, data) {
  // If error occurred, print the error object
  if (err) {
    console.log(err);
    return;
  }
  // Print file content without extra newline
  process.stdout.write(data);
});
