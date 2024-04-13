//1번 접근 15258ms
const fs = require("fs");
const input = +fs.readFileSync("./test.txt").toString().trim();

// console.log(input);
const cntDivTime = (dividend, quotient) => {
    let cnt = 0;
    while (dividend % quotient === 0) {
        dividend /= quotient;
        cnt++;
    }

    return cnt;
}

let startTime = new Date();

for (let j=0; j<100000000; ++j) {
    let cntDivByTwo = 0;
    let cntDivByFive = 0;

     for (let i=2; i<=input; ++i) {
        // cntDivByTwo += cntDivTime(i, 2);
        cntDivByFive += cntDivTime(i, 5);
    }

    // console.log(cntDivByFive);
}

console.log(new Date()-startTime)







//2번 접근 578ms
// const fs = require("fs");
// const input = +fs.readFileSync("./test.txt").toString().trim();

// let startTime = new Date();

// for (let i=0; i<100000000; ++i) {
//     let result = 0;
//     for (let i=5; i <= input; i *= 5) {
//         result += Math.floor(input / i);
//     }

//     // console.log(result);
// }

// console.log(new Date() - startTime);