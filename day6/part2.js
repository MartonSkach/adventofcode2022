const fs = require("fs");

const example = fs.readFileSync("example.txt").toString();
const input = fs.readFileSync("input.txt").toString();

let array = input;
for (let i = 0; i < array.length; i++) {
  let sample = []
  let j = 0;
  while (j < 14) {
    sample.push(array[i+j])
    j++;
  }
  if (sample.length === new Set(sample).size) {
    console.log(i+14);
    return;
  }
}