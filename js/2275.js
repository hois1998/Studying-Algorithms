const fs = require('fs');

//split의 인자로 하나 이상의 separators를 넣을 수 있지만 공부가 필
//리눅스는 줄바꿈으로 \n, 윈도우는 \r\n, apple은 \r을 사용한다

let input = fs.readFileSync('./2275.txt').toString().split('\r\n');

//last element of input is '' and should be eleminated
input.pop();

const int_input = input.map(e => parseInt(e))

// console.log('input with integer\n', int_input);

const testNum = int_input.shift();

// console.log(int_input);

//초기화 없이 배열을 선언할 때 발생할 수 있는 문제?
let floor = new Array(testNum).fill(null);
let roomNum = new Array(testNum).fill(null);
let maxFloor = 0, maxRoomNum = 1;

//store floor and room number for each case
for (let i=0; i < 2*testNum; ++i) {
  if (i % 2 == 0) {
    floor[Math.floor(i/2)] = int_input[i];
    if (floor[Math.floor(i/2)] > maxFloor) maxFloor = floor[Math.floor(i/2)]
    // console.log(i, 'floor', floor[i]);
  }
  else {
    roomNum[Math.floor(i/2)] = int_input[i];
    if (roomNum[Math.floor(i/2)] > maxRoomNum) maxRoomNum = roomNum[Math.floor(i/2)];
    // console.log(i-1, 'room', roomNum[i-1]);
  }
}
//save number of people for each room of apartment wrt maxFloor and maxRoomNum
let people = new Array(maxFloor+1).fill(null).map(e => new Array(maxRoomNum).fill(e));

for (let i=0; i < maxFloor+1; ++i) {
  for (let j=0; j < maxRoomNum; ++j) {
    if (i==0) people[i][j] = j+1;
    else {
      if (j == 0) people[i][j] = 1;
      else people[i][j] = people[i][j-1] + people[i-1][j];
    }
  }
}


// console.log(people);  //check the result of people


for (let i=0; i < testNum; ++i) {
  console.log(people[floor[i]][roomNum[i]-1])
}
