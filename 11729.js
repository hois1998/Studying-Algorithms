// const fs = require('fs');
// const input = parseInt(fs.readFileSync('./test.txt').toString().trim());
//
// let arr = [];
// let cnt = 0;
//
// //make recursive fuction with curr location, next location, top height
// //옮긴횟수는 나중에 생각하자
// const move = (curr, by, next, h) => {
//   if (h == 1) {
//     cnt++;
//     arr.push(`${curr} ${next}`);
//   }
//   else {
//     //젤 아래를 제외한 블록을
//     // let next1; //where to move for block except last one
//     //
//     // if (curr == 1) {
//     //   if (next == 2) next1 = 3;
//     //   else next1 = 2;
//     // }
//     // else if (curr == 2){
//     //   if (next == 1) next1 = 3;
//     //   else next1 = 1;
//     // }
//     // else {
//     //   if (next == 1) next1 = 2;
//     //   else next1 = 1;
//     // }
//     move(curr, next, by, h-1);
//     arr.push(`${curr} ${next}`);
//     cnt++;
//     move(by, curr, next, h-1);
//   }
// };
//
// move(1, 2, 3, input);
//
// console.log(cnt);
// for (let i=0; i < arr.length; ++i) {
//   console.log(arr[i]);
// }

const fs = require('fs');

var input = fs.readFileSync('./test.txt').toString().split('\n');
input = parseInt(input[0]);

let ar = new Array(0);
var output = '';
var rr = 0;
//make recursive fuction with curr location, next location, top height
//옮긴횟수는 나중에 생각하자

function move(curr, by, next, h) {
  rr++;
  if (h == 1) {
    //ar.push([curr, next]);
    output += curr + " " + next + '\n';
    return;
  }
  move(curr, next, by, h-1);
  //ar.push([curr, next]);
  output += curr + " " + next + '\n';
  move(by, curr, next, h-1);
}

move(1, 2, 3, input);

console.log(rr);
console.log(output)
