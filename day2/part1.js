const fs = require("fs");

const example = fs.readFileSync("example.txt").toString().split(/\r?\n/);
const input = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let points = 0;
input.forEach(row => {
  console.log(row[2], row[0])
  if (row[2] === 'X') {
    points += 1;
    if (row[0] === 'A') {
    points += 3
    } else if (row[0] === 'C') {
    points += 6
    } else {
    points += 0
    }
  }
  if (row[2] === 'Y') {
    points += 2;
    if (row[0] === 'B') {
    points += 3
    } else if (row[0] === 'A') {
    points += 6
    } else {
    points += 0
    }
  }
  if (row[2] === 'Z') {
    points += 3;
    if (row[0] === 'C') {
    points += 3
    } else if (row[0] === 'B') {
    points += 6
    } else {
    points += 0
    }
  }
});

console.log(points);