const fs = require("fs");

const example = fs.readFileSync("example.txt").toString().split(/\r?\n/);
const input = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let total = 0;
let array = input;

array.forEach(pair => {
  let i1 = pair.split(',')[0];
  let i2 = pair.split(',')[1];
  let a1 = [];
  let a2 = [];

  for (let i = parseInt(i1.split('-')[0]); i <= parseInt(i1.split('-')[1]); i++) {
    a1.push(i)
  }
  for (let j = parseInt(i2.split('-')[0]); j <= parseInt(i2.split('-')[1]); j++) {
    a2.push(j)
  }

  if (a1.some(e => a2.includes(e)) || a2.some(e => a1.includes(e))) {
    total++
  }
})

console.log(total);