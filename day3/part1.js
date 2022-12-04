const fs = require("fs");

const example = fs.readFileSync("example.txt").toString().split(/\r?\n/);
const input = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let total = 0;

input.forEach(rucksack => {
  let compartments = [];
  compartments.push(rucksack.slice(0, Math.floor(rucksack.length/2)))
  compartments.push(rucksack.slice(Math.floor(rucksack.length/2), rucksack.length))

  let found = false;
  compartments[0].split('').forEach(letter => {
    if (compartments[1].split('').includes(letter) && !found) {
      found = true;
      if (letter === letter.toLowerCase()) {
        total += letter.charCodeAt(0) - 96;
      } else {
        total += letter.charCodeAt(0) - 38;
      }    
    }
  })
})

console.log(total);