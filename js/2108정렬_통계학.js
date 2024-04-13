const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf8').toString().trim().split('\n').map(i => parseInt(i));
let N = input.shift();
const isEven = N % 2 == 0 ? true : false;
let medianIdx = isEven ? Math.floor(N / 2)-1 : Math.floor(N/2);

//-4000~4000
let arr = new Array(8001).fill(0); //arr

let sum = 0;
let min = undefined, max = undefined; //for range

for (let i of input) {
  arr[i+4000] += 1;
  sum += i;
}
console.log('is even', isEven, 'medianIdx', medianIdx);
const mean = Math.round(sum / N); //평균을 구했다

//median & 최빈값
let freq = 0;
let freqVal = undefined;
let cntFreq = 0;
let medSum = 0;
let median;
let medIdx;

for (let j=0; j<=8000; ++j) {
  if (arr[j] > freq) {
    freq = arr[j];
    freqVal = j-4000;
    cntFreq = 0;
  } else if (arr[j] == freq && cntFreq==0) {
    freqVal = j-4000;
    cntFreq++;
  }
}

let findMean = false;

for (let j=0; j<=8000; ++j) {
  medSum += arr[j];
  if (medSum >= medianIdx+1 && !findMean) {
    if (!isEven) {
      median = j-4000;
      break;
    }
    else {
      if (medSum > medianIdx+1) {
        median = j-4000;
        break;
      } else {
        median = j-4000;
        findMean = true;
        continue;
      }
    }
  }

  if (arr[j] != 0 && findMean) {
    median += j-4000;
    // console.log('passing', median);
    median /= 2;
    break;
  }
}

for (let j=0; j<=8000; ++j) {
  if (arr[j] != 0) {
    min = j-4000;
    break;
  }
}

for(let j=8000; j>=0; --j) {
  if (arr[j] != 0) {
    max = j-4000;
    break;
  }
}

const range = max - min;

//
console.log(mean);
console.log(median);
console.log(freqVal);
console.log(range);

//틀렸습니다.
