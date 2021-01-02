const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().split('\r\n');

input.pop();

let cnt = input.shift();

input = input.map(e => e.split(' ').map(num => parseInt(num)));

// console.log(input);
let container = [];

for (let i=0; i<cnt; ++i) {
  let temp = 1;
  for (let j=0; j<cnt;++j) {
    if (i != j) {
      if (input[j][0] > input[i][0] && input[j][1] > input[i][1]) temp++;
    }
  }

  container.push(temp);
}

let result = '';

for (let i=0; i<cnt; i++) {
  result += container[i] + ' ';
}

console.log(result);
