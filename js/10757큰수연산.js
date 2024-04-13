const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split(' ');

function add_big_int(a, b) {  //a , b are type of string
  let i = a.length-1, j = b.length-1;
  let container = 0;
  let result = '';

  // console.log(i, j)  //19 19로 둘 다 19자리 잘 나온다
  for (let k=0;;++k) {
    if (i-k < 0 && j-k < 0) {
      if (container == 0) break;
    }

    let sub1, sub2;

    if (i-k >= 0 && j-k >= 0) {
      sub1 = parseInt(a[i-k]);
      sub2 = parseInt(b[j-k]);
    } else if (i-k < 0 && j-k < 0) {
      sub1 = 0;
      sub2 = 0;
    } else if (j-k < 0){
      sub1 = parseInt(a[i-k]);
      sub2 = 0;
    } else {
      sub1 = 0;
      sub2 = parseInt(b[j-k]);
    }
    let temp = (sub1 + sub2 + container).toString();

    if (temp >= 10) {
      container = 1;
      temp = temp[1];
      // console.log(temp);
      // console.log('\nnext!\n');
    } else {
      container = 0;
      // console.log(temp);
    }

    result += temp;
    // console.log(result, parseInt(a[i-k]), parseInt(b[j-k]));
  }

  return result;
}
//add_big_int(input[0], input[1])
let ans = add_big_int(input[0], input[1]).split('').reverse().join('');
console.log(ans);
