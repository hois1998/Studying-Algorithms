const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

input.shift();

input = input[0].split(" ").map(e => +e);

input = input.sort((a,b) => b-a);   //리턴값이 1보다 클 때만 자리 바꾼다.

// console.log(input);

//약수 중에서 소수 구하기
let primeSet = [];

for (let i=0; i<input.length; ++i) {
    let temp = input[i];
    let isPrime = true;

    for (let j=2; j <= Math.sqrt(temp); ++j) {
        if (temp  % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeSet.push(temp);
    }
}

primeSet = primeSet.sort((a, b) => a-b);
let maxDivisor = input[0];

console.log(primeSet[0]*maxDivisor);