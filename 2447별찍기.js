const fs = require('fs');

let input = fs.readFileSync('test.txt').toString();
let num = parseInt(input);

//' '으로 찬 배열을 먼저 만든다.
let arr = new Array(num);
for (let i=0; i<num; ++i) {
  arr[i] = new Array(num).fill(' ');
}

const block = (x, y, n) => {
  if (n==0) return;

  if (n==3) {
    for (let i=0; i < 3; ++i) {
      for (let j=0; j <3; ++j) {
        if (!(i == 1 && j == 1)) {
          // console.log(x, y, i, j, arr);
          arr[x+i][y+j] = '*';
        }
      }
    }
    return;
  }

  for (let i=0; i<3; ++i) {
    for (let j=0; j<3; ++j) {
      if (!(i == 1 && j == 1))
        block(x+n/3*i, y+n/3*j, n/3);
    }
  }

  return;
};
block(0,0,num);

for (const i of arr) {
  let temp = '';
  for (const j of i) {
    temp += j;
  }
  console.log(`${temp}`);
}
