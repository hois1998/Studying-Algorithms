//직각삼각형인지 확인하는 문제
//하나의 케이스에서 입력받은 변의 길이 중 젤 긴 변의 길이를 기준으로 나머지 변의 길이와 피타고라스 정리를 만족하는지 확인

const fs = require('fs');
let input = fs.readFileSync('test.txt', 'utf-8').toString().split('\r\n');

input.pop();

for (let i of input) {
  let [a, b, c] = i.split(' ').map(x => parseInt(x));

  if (a==0 && b == 0 && c == 0) break;
  // console.log(`${a} ${b} ${c}`);

  let max = a >= b ? (a >= c ? a : c) : (b >= c ? b : c);
  // console.log(max);

  if (2*max*max == (a*a + b*b + c*c)) console.log('right');
  else console.log('wrong');
}
