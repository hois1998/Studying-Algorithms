//idea 미리 만들어 놓자
const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(i => parseInt(i));
input.shift();

let arr = [];
arr.push([1,0]);
arr.push([0,1]);

for (let i=2;i<=40;++i) {
  arr.push([arr[i-1][0] + arr[i-2][0], arr[i-1][1]+arr[i-2][1]]);
}

for (let i of input) {
  console.log(arr[i][0], arr[i][1]);
}
