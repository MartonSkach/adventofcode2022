const fs = require("fs");

const example = fs.readFileSync("example.txt").toString();
const input = fs.readFileSync("input.txt").toString();

let array = input;
for (let i = 3; i < array.length; i++) {
  let sample = [array[i-3], array[i-2], array[i-1], array[i]];
  if (sample.length === new Set(sample).size) {
    console.log(i+1);
    return;
  }
}