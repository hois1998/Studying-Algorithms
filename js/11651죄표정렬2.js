const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let num = parseInt(input.shift());

input = input.map(str => str.split(' ').map(char => parseInt(char)));

//아래는 코드는 BUBBLE SORT이다. 그러나 이 코드는 시간초과가 나왔다.
// for (let i=0; i < num; ++i) {
//   let temp = input[i];
//
//   for (let j=i-1; j >= 0; --j) {
//     if ((input[j+1][1] < input[j][1]) || ((input[j+1][1] == input[j][1]) && (input[j+1][0] < input[j][0]))) {
//       input[j+1] = input[j];
//       input[j] = temp;
//       temp = input[j];
//       // console.log(input);
//     } else {
//       break;
//     }
//   }
// }
//
// // console.log(input);
// for (let i of input) {
//   console.log(i[0], i[1]);
// }


//지금해야 할 것은 SELECTION SORT를 시도하는 것이다.
//이것도 시간초과이다. 그러면 merge sort를 하던가 아니면 다른 참신한 방법이을 생각하던가
// for (let i=0; i<num; ++i) {
//   let [min_x, min_y] = input[i];
//   let idx = i;
//   for (let j=i; j<num; ++j) {
//     if ((min_y > input[j][1]) || (min_y == input[j][1] && min_x > input[j][0])) {
//       [min_x, min_y] = input[j];
//       idx = j;
//     }
//   }
//   if (idx != i) {
//     input[idx] = input[i];
//     input[i] = [min_x, min_y];
//   }
//   console.log(input[i][0], input[i][1]);
// }

//merge sort를 해보자

//work!
function sorting(arr1, arr2) {
  let newArr = new Array(arr1.length + arr2.length);
  let i = 0, j = 0, k = 0;
  //divide조건 조절하기

  while(true) {
    if (k == newArr.length) break;
    if (i < arr1.length && j < arr2.length) {
      if ((arr1[i][1] > arr2[j][1]) || (arr1[i][1] == arr2[j][1] && arr1[i][0] > arr2[j][0])) {
        newArr[k] = arr2[j];
        j++;
      } else {
        newArr[k] = arr1[i];
        i++;
      }
      k++;
    } else if (i >= arr1.length) {
      newArr[k] = arr2[j];
      j++;
      k++;
    } else {
      newArr[k] = arr1[i];
      i++;
      k++;
    }
  }

  return newArr;
}

function divide(arr) {
  if (arr.length >= 2) {
    let subLength = arr.length / 2;
    let sub1 = arr.slice(0, subLength), sub2 = arr.slice(subLength, arr.length);
    let sortedSub1 = divide(sub1); //divide에서 정렬이된 두 sub1,sub2가 만들어 져야 한다.
    let sortedSub2 = divide(sub2);

    let newArr = sorting(sortedSub1, sortedSub2);

    return newArr;
  } else {
    return arr;
  }
}

// let temp2 = [1,2,4]
// let temp1 = [5,6,7];
// console.log(sorting(temp1, temp2));

// console.log(input);
for (let i of divide(input)) {
  console.log(i[0], i[1]);
}
