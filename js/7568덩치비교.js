const fs = require('fs');

let input = fs.readFileSync('./test.txt', 'utf-8').toString().split('\r\n');
let cnt = parseInt(input.shift());
input.pop();

// console.log(cnt, '\n', input);

input = input.map(i => {
  let temp = i.split(' ').map(j => parseInt(j));
  return [temp[0], temp[1]];
});

// console.log(input); //[ [ 55, 185 ], [ 58, 183 ], [ 88, 186 ], [ 60, 175 ], [ 46, 155 ] ]

let container = [];

for (let i=0; i<cnt; ++i) {
  let getIdx = 0;
  for (let e of container) {
    if ((input[i][0] > e[0]) && (input[i][1] > e[1])) {
      // console.log('hit');
      break;
    }
    else getIdx++;
  }

  container.splice(getIdx, 0, input[i]);
  // console.log(container);
}
let result = '';

for (let i=0; i<cnt; ++i) {
  let grad = container.indexOf(input[i]);
  while ((grad > 0) && ((input[i][0] >= container[grad-1][0]) || (input[i][1] >= container[grad-1][1]))) {
    grad--;
  }
  result += (grad+1) + ((i < cnt -1) ? " " : "");
}

console.log(result);


//이 코드의 문제는 꼼꼼하게 풀지 않으면 바로 시간낭비를 많이 하게 된다.
//입력이 차례대로 [60 , 128], [58, 135], [59, 136]일 때
// 분명하게 [[60, 128], [58, 135]]가 설정이 되고
// 그 뒤에는 분명이 [[60, 128], [59, 136], [58, 135]]로 설정이 되고 판단을 처음 2개는 1등으로 나머지 하나는 2등으로
// 이 문제는 비교를 잘 못하고 있기 때문이다. 
