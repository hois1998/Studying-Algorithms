const fs = require('fs');
const input = parseInt(fs.readFileSync('./test.txt').toString().trim());

let cnt = 0;
let ans;
for (let i=666;;++i) {
  if (i.toString().indexOf('666') !== -1) {
    cnt++;
    if (cnt == input) {
      ans = i;
      break;
    }
  }
}

console.log(ans);
//600ms
//생각을 바꿔서 케이스를 모두 따지는 것이 아니라 카운트를 하는식으로 바꿈
