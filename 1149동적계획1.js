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
  sumG += input[i][1] +findMin(r, b);
  sumB += input[i][2] + findMin(r, g);
  console.log(sumR, sumG, sumB);
}

console.log(findMin(sumR, findMin(sumG, sumB)));
