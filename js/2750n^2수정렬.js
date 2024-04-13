//insertion sort해보자
const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split('\n');
let N = input.shift();

input = input.map(e => parseInt(e));
let min;

for (let i=0; i<N; ++i) {
  let temp = input[i];

  //find insert idex in sorted arr
  let idx = -1;
  for (let j=0; j<i; ++j) {
    if (input[j] > temp) {
      idx = j;
      break;
    }
  }

  //rearrange sorted arr
  if (idx != -1) {
    let toBeShifted = input.slice(idx, i);
    input[idx] = temp;
    let l = 0;
    for (let k=idx+1;k<=i;++k) {
      input[k] = toBeShifted[l];
      l++;
    }
  }

  // console.log(input);

}

let result = '';
input.forEach(i => {result += `${i}\n`});
console.log(result);
