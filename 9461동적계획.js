const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(char => parseInt(char));
let N = input.shift();

// console.log(N);
// console.log(input);

let arr = [1,1,1,2,2];
for (let i=arr.length-1;i<=100;++i) {
  arr.push(arr[i] + arr[i-4])
}
// console.log(arr);
for (let i=0; i < N; ++i) {
  console.log(arr[input[i]-1]);
}
