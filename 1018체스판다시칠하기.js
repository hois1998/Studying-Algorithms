const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');  //trim을하면 \r이 사라진다
// console.log(input);
let [row, col] = input.shift().split(' ').map(e => parseInt(e));
// console.log(h, w);

//하나의 배열에 정사각형 전체의 색깔 정보를 넣기
let arr = new Array(row);

for (let i=0; i<row; ++i) {
  arr[i] = input[i];
}

//일일이 정보를 저장하고 있기
let min = row*col;

//color 0이 검정 1이 흰색으로 생각
for (let color=0; color<=1; ++color) {
  let judgeColor = color == 0 ? 'B' : 'W';

  for (let i=0; i<=(row-8); ++i) {
    for (let j=0; j<=(col-8); ++j) {
      let cnt = 0;

      //각 케이스에 대해 8*8체스판 변경색개수 확인하기
      for (let k=i; k<i+8; ++k) {
        for (let l=j; l<j+8; ++l) {
          if ((l+k) % 2 == 0){
            if (arr[k][l] != judgeColor) cnt++;
          } else {
            if (arr[k][l] == judgeColor) cnt++;
          }
        }
      }
      //여기서 cnt값을 min에 업데이트
      if (cnt < min) min = cnt;
      // console.log(i,j,cnt);
    }
  }

}


console.log(min);
