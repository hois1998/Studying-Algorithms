//한번더 연습할겸 insertion으로 진행
const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split('\n');
let N = parseInt(input.shift());
input = input.map(ageName => {
  let person = ageName.split(' ');
  return [parseInt(person[0]), person[1]];
});

//시간초과와 메모리초과 오류가 발생한
// for (let i=0; i<N; ++i) {
//   let toBeSorted = input[i];
//   let idx = -1;
//   //find idx on sorted arr
//   for (let j=0; j<i; ++j) {
//     if (input[j][0] > toBeSorted[0]) {
//       idx = j;
//       break;
//     }
//   }
//
//   if (idx != -1) {
//     let temp = input[idx];
//     input[idx] = toBeSorted;
//     toBeSorted = temp;
//     for (let k=idx+1;k<=i;k++) {
//       temp = input[k];
//       input[k] = toBeSorted;
//       toBeSorted = temp;
//     }
//   }
// }
//
// let result = '';
// for (let i=0; i<N; ++i) {
//   console.log(`${input[i][0]} ${input[i][1]}`);
// }

//sort를 사용해서 성공햇다.

// input.sort((a, b) => {
//   if (a[0] == b[0]) {
//     return 1;
//   } else {
//     return a[0] - b[0];
//   }
// })
//
// for (let i=0; i<N; ++i) {
//   console.log(`${input[i][0]} ${input[i][1]}`);
// }





//
const MAX = 200;
const dict = Array.from(new Array(MAX + 1), () => []);
console.log(dict);
const dict1 = new Array(201).fill(1).map(i => []);
dict1[0].push(1);
dict1[0].push(2);
console.log(dict1);
require("fs")
  .readFileSync('./test.txt', "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" "))
  .forEach(([n, s]) => dict[Number(n)].push(s));

console.log(dict);
const answer = dict.reduce((acc, names, age) => {
  if (names.length === 0) return acc;
  else return acc + names.map((name) => `${age} ${name}\n`).join("");
}, "");
console.log(answer);
