const fs = require("fs");

const example = [
  'NZ', 
  'DCM', 
  'P'
  ]
const input = [
  'FHMTVLD',
  'PNTCJGQH',
  'HPMDSR',
  'FVBL',
  'QLGHN',
  'PMRGDBW',
  'QLHCRNMG',
  'WLC',
  'TMZJQLDR'
  ]
const exampleInstructions = fs.readFileSync("exampleInstructions.txt").toString().split(/\r?\n/);
const inputInstructions = fs.readFileSync("inputInstructions.txt").toString().split(/\r?\n/);

let array = input;
let instructions = inputInstructions;

instructions.map(i => String(i).match(/\d/g)).forEach(row => {
  if (row.length === 4){
    row = [row[0] + row[1], row[2], row[3]]
  }
  let temp = array[parseInt(row[1])-1].slice(0, parseInt(row[0]));
  array[parseInt(row[1])-1] = array[parseInt(row[1])-1].substring(parseInt(row[0]));
  array[parseInt(row[2])-1] = temp + array[parseInt(row[2])-1];
})

console.log(array);
