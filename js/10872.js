// const fs = require('fs');
//
// const input = fs.readFileSync('./test.txt').toString().trim();
//
// const factorial = (i) => {
//   //0! = 1
//   if (i <= 1) return 1;
//
//   return i * factorial(i-1);
// }
//
// console.log(factorial(input));


const fs = require('fs');

//trim은 문자열에서 양끝단의 공백을 지우는 함수
let input = fs.readFileSync('./test.txt', 'utf-8').toString().trim();

const factorial = (n) => {
  if (n == 0 || n == 1) return 1;

  return n * factorial(n-1);
}

console.log(factorial(input));
