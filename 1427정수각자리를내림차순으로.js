const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim();
let result = ''
input = input.split('').sort((a,b) => b-a).forEach(e => {result += e});
console.log(result);
