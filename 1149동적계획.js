const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
input = input.map(houseColorPrice => houseColorPrice.split(' ').map(item => parseInt(item)));

//r,g,b 각 인덱스 0,1,2
function findIdx(arr, idx=0) {
  if (idx == 0) { //젤 작은 수 찾기
    if (arr[0] <= arr[1] && arr[0] <= arr[2]) return 0;
    if (arr[1] <= arr[0] && arr[1] <= arr[2]) return 1;
    return 2;
  } else if (idx == 1) {  //두번째로 작은 수 찾기
    if (arr[0] >= arr[1]) {
      if (arr[2] >= arr[0]) return 0;
      if (arr[2] <= arr[1]) return 2;
      return 1;
    } else {
      if (arr[1] <= arr[2]) return 1;
      if (arr[2] <= arr[0]) return 0;
      return 2;
    }
  } else {  //3번 째로 작은 수 찾기
    if (arr[0] >= arr[1]) {
      if (arr[2] >= arr[0]) return 2;
      if (arr[1] >= arr[2]) return 0;
      return 0;
    } else {
      if (arr[0] >= arr[2]) return 1;
      if (arr[1] <= arr[2]) return 2;
      return 0;
    }
  }
}

function 

let currMinIdx;
let sum = input[0][findIdx(input[0])];
let idxArr = [findIdx(input[0])];

for (let i=1; i <N; ++i) {
  currMinIdx = findIdx(input[i]);

  if (currMinIdx == idxArr[i-1]) {
    let sum1 = sum + input[i][findIdx(input[i], 1)];
    let sum2 = input[i][currMinIdx] +
  } else {
    sum += input[i][currMinIdx];
    idxArr.push(currMinIdx);
  }
}
