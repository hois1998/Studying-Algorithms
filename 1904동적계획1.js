const fs = require('fs');
const input = +fs.readFileSync('./test.txt', 'utf8').toString().trim();
let arr = new Array(1000001); //이게 먹힌다

arr[1] = 1;
arr[2] = 2;

for (let i=3; i<arr.length; ++i) {
  arr[i] = (arr[i-1] + arr[i-2]) % 15746;
  // if(i < 1000) console.log('arr['+i+'] '+arr[i]);
}

// function recurrence(n) {
//   if (n == 1) return 1;
//   if (n == 2) return 2;
//
//   return (recurrence(n-1) + recurrence(n-2));
// }

console.log(arr[input] % 15746);
