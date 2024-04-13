let N = 21;
let arr = Array.from(new Array(N), i => Array.from(new Array(N), i => new Array(N).fill(undefined)));


const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split('\n');
input.pop();
input = input.map(str => str.split(' ').map(i => parseInt(i)));

for (let i=0; i<N; ++i) {
  for (let j=0; j<N; ++j) {
    for (let k=0; k<N; ++k) {
      if (i == 0 || j == 0 || k == 0) {
        arr[i][j][k] = 1;
      } else if (i < j && j < k) {
        arr[i][j][k] = arr[i][j][k-1] + arr[i][j-1][k-1] - arr[i][j-1][k];
      } else {
        arr[i][j][k] = arr[i-1][j][k] + arr[i-1][j-1][k] + arr[i-1][j][k-1] - arr[i-1][j-1][k-1];
      }
    }
  }
}

let result = '';

for (let [a,b,c] of input) {
  if (a <= 0 || b <= 0 || c <= 0) {
    result += `w(${a}, ${b}, ${c}) = ${1}\n`;
  } else if (a>20 || b>20 || c>20) {
    result += `w(${a}, ${b}, ${c}) = ${arr[20][20][20]}\n`;
  } else {
    result += `w(${a}, ${b}, ${c}) = ${arr[a][b][c]}\n`;
  }
}
console.log(result);

// if (a <= 0 || b <= 0 || c <= 0) {
//   result += `w(${a}, ${b}, ${c}) = ${1}\n`;
// } else if (a>20 || b>20 || c>20) {
//   result += `w(${a}, ${b}, ${c}) = ${arr[20][20][20]}\n`;
//위 조건문을 반대로 썼던 것이 문제였다
