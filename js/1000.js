// input
// 1 2

const fs = require('fs');

const input = fs.readFileSync('./1000_add.txt').toString().split(' ');

let a = parseInt(input[0]), b = parseInt(input[1]);

console.log(a+b);
