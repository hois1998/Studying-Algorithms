//20220216 다시봤는데 아예 접근을 못하는 상태에서 우선 코드를 짜보잔 생각으로 시작했던 것같다. 
//물론 지금은 어떻게 코드를 짜야 할 지 한눈에 보인다.
//총 n개의 입력을 받을 때 m-1에서 최소인 값을 기준으로 m의 최소인값과 색깔이 겹치는 때와 그렇지 않은 때로 나눠서 생각 중이다.
//그렇게 하지 말고 항상 세 가지 경우를 n까지 생각해 주고 마지막에 젤 비용이 적게 드는 케이스를 뽑으면 된다.


//아래는 다시 풀어서 맞은 코드이다.
// const fs = require('fs');
// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
// const N = +input.shift();
// input = input.map(houseColorPrice => houseColorPrice.split(' ').map(item => parseInt(item)));

// let sum = [...input[0]];
// const len = input.length;

// for (let i=1; i<len; ++i) {
//   let temp = [...sum];

//   for (let j=0; j<3; ++j) {
//     if (j === 0) {
//       if (temp[1] < temp[2]) {
//         sum[j] = temp[1];
//       } else {
//         sum[j] = temp[2];
//       }
//     } else if (j === 1) {
//       if (temp[0] < temp[2]) {
//         sum[j] = temp[0];
//       } else {
//         sum[j] = temp[2];
//       }
//     } else {
//       if (temp[0] < temp[1]) {
//         sum[j] = temp[0];
//       } else {
//         sum[j] = temp[1]
//       }
//     }

//     sum[j] += input[i][j];
//   }
// }

// const result = sum[0] < sum[1] ? (sum[0] < sum[2] ? sum[0] : sum[2]) : (sum[1] < sum[2] ? sum[1] : sum[2]);
// console.log(result);




// r,g,b 각 인덱스 0,1,2
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

// function 

// let currMinIdx;
let sum = input[0][findIdx(input[0])];
let idxArr = [findIdx(input[0])];
console.log(sum, idxArr, input);


for (let i=1; i <N; ++i) {
  currMinIdx = findIdx(input[i]);

  if (currMinIdx == idxArr[i-1]) {
    let sum1 = sum + input[i][findIdx(input[i], 1)];
    let sum2 = input[i][currMinIdx] ;
  } else {
    sum += input[i][currMinIdx];
    idxArr.push(currMinIdx);
  }
}
