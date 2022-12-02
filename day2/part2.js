const fs = require("fs");

const example = fs.readFileSync("example.txt").toString().split(/\r?\n/);
const input = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let points = 0;
input.forEach(row => {
  console.log(row[2], row[0])
  if (row[0] === 'A') {
    if (row[2] === 'X') {
      points += 3
    }
    if (row[2] === 'Y') {
      points += 4
    }
    if (row[2] === 'Z') {
      points += 8
    }
  }
  if (row[0] === 'B') {
    if (row[2] === 'X') {
      points += 1
    }
    if (row[2] === 'Y') {
      points += 5
    }
    if (row[2] === 'Z') {
      points += 9
    }
  }
  if (row[0] === 'C') {
    if (row[2] === 'X') {
      points += 2
    }
    if (row[2] === 'Y') {
      points += 6
    }
    if (row[2] === 'Z') {
      points += 7
    }
  }
});

console.log(points);