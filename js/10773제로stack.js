const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(chr => +chr);
input.shift();
console.log(input);

let len = input.length;
let ans = [];

for (let i=0; i<len; ++i) {
    if (input[i] !== 0) {
        ans.push(input[i]);
    } else {
        ans.pop();
    }
}

let result = 0;
len = ans.length;

for(let i=0; i<len; ++i) {
    result += ans[i];
}

console.log(result);