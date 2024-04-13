// input
// 8 8
// WBWBWBWB
// BWBWBWBW
// WBWBWBWB
// BWBBBWBW
// WBWBWBWB
// BWBWBWBW
// WBWBWBWB
// BWBWBWBW


// ****************************************************************

//brute무식한 force힘 알고리즘이다. 전체탐색을 하는 알고리즘을 구현하는 것이다. 
//전체탐색의 방법으로는 선형구조에 대해선 순차탐색이 있으며, cd. bubble, selection, insertion은 sorting algorithm이다. 
//비선형에 대해선 dfs(depth first search)와 bfs(breadth first search) 알고르즘이 있다.
//부루투포스는 전체를 모두 탐색한다는 추상적인 개념으로 이해하면 되겠다.

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const [M, N] = input.shift().split(' ');
// console.log(M, N);
// console.log(input);
let min = Infinity;    //new symbol

// console.log(input[0][0])
for (let i=0; i <= (M-8); ++i) {
  for (let j=0; j <= (N-8); ++j) {

    let checkWord = ['B', 'W'];

    for (let w of checkWord) {
      let cnt = 0;

      for (let k=i; k<i+8; ++k) {
        for (let l=j; l<j+8; ++l) {
          
          if ((k+l) % 2 == 0) {//even
            //console.log(`i: ${i} j: ${j} k: ${k} l: ${l}`)
            if (input[k][l] != w) cnt++;
          } else {  //odd
            if (input[k][l] == w) cnt++;
          }
        }
      }

      if (cnt < min) {
        min = cnt;
      }

    }

    
    
  }
}

console.log(min)




// 새로운 방법은 아니고 그냥 또 복습했던 코드


// const fs = require('fs');

// let input = fs.readFileSync('./test.txt').toString().trim().split('\n');  //trim을하면 \r이 사라진다
// // console.log(input);
// let [row, col] = input.shift().split(' ').map(e => parseInt(e));
// // console.log(h, w);

// //하나의 배열에 정사각형 전체의 색깔 정보를 넣기
// let arr = new Array(row);

// for (let i=0; i<row; ++i) {
//   arr[i] = input[i];
// }

// //일일이 정보를 저장하고 있기
// let min = row*col;

// //color 0이 검정 1이 흰색으로 생각
// for (let color=0; color<=1; ++color) {
//   let judgeColor = color == 0 ? 'B' : 'W';

//   for (let i=0; i<=(row-8); ++i) {
//     for (let j=0; j<=(col-8); ++j) {
//       let cnt = 0;

//       //각 케이스에 대해 8*8체스판 변경색개수 확인하기
//       for (let k=i; k<i+8; ++k) {
//         for (let l=j; l<j+8; ++l) {
//           if ((l+k) % 2 == 0){
//             if (arr[k][l] != judgeColor) cnt++;
//           } else {
//             if (arr[k][l] == judgeColor) cnt++;
//           }
//         }
//       }
//       //여기서 cnt값을 min에 업데이트
//       if (cnt < min) min = cnt;
//       // console.log(i,j,cnt);
//     }
//   }

// }


// console.log(min);
