const fs = require('fs');

let input = fs.readFileSync('./test.txt', 'utf-8').toString().trim();

let pos = input.split('');
let num1 = parseInt(pos[0]) + 9*(pos.length-1);
// console.log(num1);
input = parseInt(input);

let source = 0;
//4자리 자연수를 입력으로 받으면 4자리 중 msb의 값 a과 나머지를 합쳐서 a+9+9+9가 최대로 가질수 있는 자릿수 더하기 이다.
for (let i=input-num1; i < input; ++i) {
  let num2 = i.toString().split('').map(e => parseInt(e));
  let sum = 0;
  for (let j of num2) {
    sum += j;
  }

  if ((sum+i)==input) {
    source = i;
    break;
  }
}

console.log(source);
