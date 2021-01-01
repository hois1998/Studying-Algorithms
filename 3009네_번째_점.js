const fs = require('fs');
let input = fs.readFileSync('test.txt', 'utf-8').toString().split('\r\n');

input.pop();

// console.log(input);

let x = new Array(3);
let y = new Array(3);
let cnt = 0;

//출력할 x, y
let x0, y0;

for (let i of input) {
  [x[cnt], y[cnt]] = i.split(' ');

  // console.log(`x: ${x[cnt]}, y: ${y[cnt]}`);
  cnt++;
}

x0 = x[0] == x[1] ? (x[2]) : (x[0] == x[2] ? (x[1]) : (x[0]));
y0 = y[0] == y[1] ? y[2] : (y[0] == y[2] ? y[1] : y[0]);
console.log(`${x0} ${y0}`);
