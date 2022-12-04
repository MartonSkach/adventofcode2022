const fs = require("fs");

const example = fs.readFileSync("example.txt").toString().split(/\r?\n/);
const input = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let total = 0;
let i = 0;

let array = input;
while (i < array.length) {
  let compartments = [array[i], array[i+1], array[i+2]];
  
  let found = false;
  compartments[0].split('').forEach(letter => {
    if (compartments[1].split('').includes(letter) && compartments[2].split('').includes(letter) && !found) {
      found = true;
      i += 3
      if (letter === letter.toLowerCase()) {
        total += letter.charCodeAt(0) - 96;
      } else {
        total += letter.charCodeAt(0) - 38;
      }    
    }
  })
}


console.log(total);