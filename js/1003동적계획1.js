//idea 미리 만들어 놓자

//피보나치수열의 응용으로 어떤 n번째 수 출력을 위해 f(0)과 f(1)을 각각 몇 번 사용하는지 출력하는 문제이다. 
//220215에 다시와서 봤는데 바로 이해되지 않았다.
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
