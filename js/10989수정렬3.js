const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(i => parseInt(i));
let N = input.shift();

input.sort((a,b) => a-b);
let result = '';
input.forEach(item => {result += `${item}\n`});
console.log(result);

//메모리초과 에러 나옴
//c언어로 베껴서 성공함
