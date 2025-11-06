#!/usr/bin/node

// Get the first argument and convert it to an integer
const x = parseInt(process.argv[2], 10);

// Check if the argument is valid (not NaN and positive)
if (isNaN(x) || x <= 0) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}