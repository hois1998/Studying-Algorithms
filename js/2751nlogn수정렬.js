const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(i => parseInt(i));
let N = input.shift();

input.sort((a,b) => a-b);
let result = '';
input.forEach(item => {result += `${item}\n`});
console.log(result);
