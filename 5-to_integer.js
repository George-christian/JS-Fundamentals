#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Convert it to an integer using parseInt
const number = parseInt(arg, 10);

// Check if the conversion produced a valid number
if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + number);
}