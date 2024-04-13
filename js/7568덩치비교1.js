const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().split('\r\n');
let cnt = parseInt(input.shift());
input.pop()
input = input.map(person => {
  let temp = person.split(' ').map(i => parseInt(i));
  temp.push(0); //push를 적용해도 return값은 적용한 후의 배열크기이다.
                //하지만 적용한 temp에는 push의 영향이 바로 반영된다.
  return temp;
});

let grad = 1;
let applied = 0;

//루프에서 등수를 넣는다 각 등수가 모두 매겨지면 while문을 나온다
while (true) {
  let wmax=0, hmax=0
  let wIdx, hIdx;

  //등수 없는 것들 중에서 wmax, hmax찾기
  let tempInput = input.filter(i => i[2] == 0);
  // console.log(tempInput);
  for (let i=0; i<tempInput.length; ++i) {
    if (tempInput[i][0] > wmax) {
      wIdx = i;
      wmax = tempInput[i][0];
    }

    if (tempInput[i][1] > hmax) {
      hIdx = i;
      hmax = tempInput[i][1];
    }
  }
  // console.log('\n\n', wmax+' '+wIdx+' '+hmax+' '+hIdx, wIdx == hIdx,'\n\n');
  let double = 0;

  if (hIdx == wIdx) {
    for (let i=0; i<tempInput.length; ++i) {
      if (i != hIdx) {
        // console.log(input[i][0], wmax, input[i][1], hmax);
        if ((tempInput[i][0] == wmax) && (tempInput[i][1] == hmax)) {
          double = 1;
          break;
        }
      }
    }
  }

  if ((hIdx == wIdx) && (double == 0)) { //hIdx == wIdx충족해도 똑같은 키 무게 갖는 원소가 하나도 없다는 조건 충족해야 한다.
    input[wIdx][2] = grad;
    grad++;
    applied++;
  } else {
    //여기가 좀 따다로운데 max 2개를 갖고 있는 녀석의 다른 하나보다 크거나 같은값을 갖고 있으면 무조건 같은 등수를 갖는다

    let temp_cnt = 0; //grad적용후 얼마나 grad를 올려야할지 정해준다

    for (let i=0; i<cnt; ++i) {
      if (input[i][2] != 0) continue;

      if ((input[i][0] >= input[hIdx][0]) || (input[i][1] >= input[wIdx][1])) {
        input[i][2] = grad;
        temp_cnt++;
        applied++;
      }
    }

    grad += temp_cnt;
  }

  //모든 등수가 다 매겨졌는지 확인
  if (applied == cnt) break;
}

let result = '';

for (let i of input) {
  result += i[2] + ' ';
}

console.log(result);
