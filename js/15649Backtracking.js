const fs = require('fs');
let [num, pick] = fs.readFileSync('./test.txt', 'utf8').toString().trim().split(' ').map(i => parseInt(i));

function numToArr(num) {
  let arr = [];
  for (let i=0; i<num; ++i) {
    arr.push(i+1);
  }

  return arr;
}

function returnArr(arr, cnt) {
  if (arr.length == 1) return arr;

  let mArr = [];

  for (let item of arr) {
    let temp = arr.filter(i => i != item);
    // console.log('item:', item, temp, 'cnt:', cnt);
    // console.log(returnArr(temp, cnt-1));
    if (cnt-1 > 0) {
      let childArr = returnArr(temp, cnt-1).map(i => `${item} ${i}`);
      insertToArr(mArr, childArr);
    } else {
      mArr.push(item);
    }
  }

  return mArr;
}

//return 으로 motherArr를 받지 않아도 전역변수에 push내용이 업데이트 된다
function insertToArr(motherArr, childArr) {
  for (let i of childArr) {
    motherArr.push(i);
  }
}
let arr = numToArr(num);
// console.log(arr);
let test = returnArr(arr, pick);
for (let i of test) {
  console.log(i);
}
