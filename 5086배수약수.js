const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(str => {
    return str.trim().split(" ").map(e => parseInt(e));
});
input.pop();
let len = input.length;

// console.log(input);

let result = "";

for (let i=0; i<len; ++i) {
    let e1 = input[i][0];
    let e2 = input[i][1];
    
    if (e1 > e2 && e1 % e2 === 0) {
        result += "multiple" + "\n";
    } else if (e1 < e2 && e2 % e1 === 0) {
        result += "factor" + "\n";
    } else {
        result += "neither" + "\n";
    }
    
}

console.log(result);