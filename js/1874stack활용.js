//stack을 활용해 입력받은 수열을 만들 수 있는지 확인한다. 
// 1부터 8까지에 수에 대해 차례로 
//[push, push, push, push, pop, pop, push, push, pop, push, push, pop, pop, pop, pop, pop] 연산을 수행하면 수열 [4, 3, 6, 8, 7, 5, 2, 1]을 얻을 수 있다.
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(chr => +chr);
const n = input.shift();

let refArr = Array(n).fill(1);

refArr = refArr.map((e, idx) => e+idx);

let newArr = [];
let refNum = 0;
let isConsistent = true;
let result = "";

for (let i=0; i<n; ++i) {
    let temp = input[i];
    if (temp > refNum)
     refNum = refArr.shift();
    
    while (temp > refNum) {
        newArr.push(refNum);
        result += "+\n";
        refNum = refArr.shift();   
    }

    if (temp === refNum) {
        result += "+\n-\n";
    }

    if (temp < refNum) {
        let outTemp = newArr.pop();
        if (outTemp !== temp) {
            isConsistent = false;
            break;
        }
        result += "-\n";
    }

}

if (!isConsistent) console.log("NO");
else console.log(result);