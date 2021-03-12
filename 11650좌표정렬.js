const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split('\n');
let N = parseInt(input.shift());
input = input.map(coord => coord.split(' ').map(e => parseInt(e)));

let results = '';
input.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
}).forEach(e => {
  results += `${e[0]} ${e[1]}\n`;
});

console.log(results);
