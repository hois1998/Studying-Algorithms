const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let num = parseInt(input.shift());

input = input.map(str => str.split(' ').map(cha => parseInt(cha)));

//아래는 코드는 BUBBLE SORT이다. 그러나 이 코드는 시간초과가 나왔다.

// for (let i=0; i < num; ++i) {
//   let temp = input[i];
//
//   for (let j=i-1; j >= 0; --j) {
//     if ((input[j+1][1] < input[j][1]) || ((input[j+1][1] == input[j][1]) && (input[j+1][0] < input[j][0]))) {
//       input[j+1] = input[j];
//       input[j] = temp;
//       temp = input[j];
//       // console.log(input);
//     } else {
//       break;
//     }
//   }
// }
//
// // console.log(input);
// for (let i of input) {
//   console.log(i[0], i[1]);
// }


//지금해야 할 것은 SELECTION SORT를 시도하는 것이다.
//이것도 시간초과이다. 그러면 merge sort를 하던가 아니면 다른 참신한 방법이을 생각하던가
for (let i=0; i<num; ++i) {
  let [min_x, min_y] = input[i];
  let idx = i;
  for (let j=i; j<num; ++j) {
    if ((min_y > input[j][1]) || (min_y == input[j][1] && min_x > input[j][0])) {
      [min_x, min_y] = input[j];
      idx = j;
    }
  }
  if (idx != i) {
    input[idx] = input[i];
    input[i] = [min_x, min_y];
  }
  console.log(input[i][0], input[i][1]);
}
