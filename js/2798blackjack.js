const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().split('\n');

input.pop();

let [cardNum, ans] = input[0].split(' ').map(i =>parseInt(i));
let card = input[1].split(' ').map(i => parseInt(i));

//카드 개수는 최대 100개
//제한 시간은 또 1초
//일단 노가다로 해보자
// console.log(card);
let sum = 0;
let checkBr = 0;
for (let i=0; i<cardNum-2; ++i) {
  for (let j=i+1; j<cardNum-1; ++j) {
    for (let k=j+1; k<cardNum; ++k) {

      if (card[i] + card[j] + card[k] <= ans) {
        if (card[i] + card[j] + card[k] == ans) {
          checkBr = 1;
          sum = ans;
          break;
        }
        if ((card[i] + card[j] + card[k]) > sum) {
          sum = card[i] + card[j] + card[k];
        }
      }

    }
    if (checkBr) break;
  }
  if (checkBr) break;
}

console.log(sum);
//오히려 정답과 완전히 같을 때 break로 for문을 빠져나오는 코드를 작성한 결과 시간이 더 소요됐다.
