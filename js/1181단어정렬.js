const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let N = parseInt(input.shift());

//idx가 단어의 길이인 배열을 만들기
let arr = Array.from(new Array(51), () => []);
input.forEach((item) => {
  if (arr[item.length].indexOf(item) == -1) {
    //compare(arr[item.length], item);   //item을 어디 위치에 넣을지 결정
    arr[item.length].push(item);
  }
});

//sort가 있다!
// console.log(arr);
let result = '';
for (let i=0; i<51; ++i) {
  if (arr[i].length > 0) {
    arr[i].sort();
    arr[i].forEach(word => {
      result += `${word}\n`;
    });
  }
}

console.log(result);

//바로 sort를 사용할 수도 있단
