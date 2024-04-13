//깔끔한 식이라고 생각했는데 결과가 
// input
// 3
// 1 100 100
// 100 100 100
// 1 100 100
// 에 대해
// 1 100 100
// 201 201 201
// 403 502 502
// 403
// 으로 잘못나왔다. 이를 해결하기 위해선 
// sumR += input[i][0] + findMin(g, b);
// sumG += input[i][1] + findMin(r, b);
// sumB += input[i][2] + findMin(r, g);
// 를 
// sumR = input[i][0] + findMin(g, b);
// sumG = input[i][1] + findMin(r, b);
// sumB = input[i][2] + findMin(r, g);
// 로 바꿔주면 됐는데 머리 과부하가 왔었나 보다.

const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
input = input.map(houseColorPrice => houseColorPrice.split(' ').map(item => parseInt(item)));

function findMin(a, b) {
  if (a >= b) {
    return b;
  }
  return a;
}

// let sumR = findMin(input[0][1], input[0][2]);
// let sumG = findMin(input[0][0], input[0][2]);
// let sumB = findMin(input[0][0], input[0][1]);
let sumR = input[0][0];
let sumG = input[0][1];
let sumB = input[0][2];
console.log(sumR, sumG, sumB);
for (let i=1; i<N; ++i) {
  let r = sumR, g = sumG, b = sumB;

  sumR += input[i][0] + findMin(g, b);
  sumG += input[i][1] + findMin(r, b);
  sumB += input[i][2] + findMin(r, g);
  console.log(sumR, sumG, sumB);
}

console.log(findMin(sumR, findMin(sumG, sumB)));
