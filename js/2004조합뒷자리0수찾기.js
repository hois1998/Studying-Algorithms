//nCr에 대한 결과가 뒷자리부터 0의 개수가 몇개인지 카운트 10으로 나눠질 수 있어야 하고 결국 2와5로 나눠지는지 

const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim().split(" ").map(e => +e);

// console.log(input);
if (input[1] >= Math.floor(input[0])) {
    input[1] = input[0]-input[1];
}

let cntDivByTwo = 0;
let cntDivByFive = 0;
let temp1 = input[0];
let temp2 = input[0]-input[1];
let temp3 = input[1];

for (let i=2; i<=temp1; i*=2) {
    cntDivByTwo +=  Math.floor(temp1/i) - Math.floor(temp2/i);
}

for (let i=5; i<=temp1; i*=5) {
    cntDivByFive += Math.floor(temp1/i) - Math.floor(temp2/i);
}

console.log(cntDivByTwo, cntDivByFive);

for (let i=2; i<temp3; i*=2) {
    cntDivByTwo -= Math.floor(temp3/i);
}

for (let i=5; i<=temp3; i*=5) {
    cntDivByFive -= Math.floor(temp3/i);
}

let result = cntDivByFive >= cntDivByTwo ? cntDivByTwo : cntDivByFive;

console.log(result);