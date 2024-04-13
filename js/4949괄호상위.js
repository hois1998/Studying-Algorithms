const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(str => str.trim());
input.pop();
const iLen = input.length;

// console.table(input)
const vps = str => {
    const len = str.length;
    let arr = [];

    for (let i=0; i<len; ++i) {
        const chr = str[i];

        if (chr === "(") {
            arr.unshift(0);
        } else if (chr === ")") {
            if (arr.length === 0 || arr[0] !== 0) return "no";

            arr.shift();

        } else if (chr === "[") {
            arr.unshift(1);
        } else if (chr === "]") {
            if (arr.length === 0 || arr[0] !== 1) return "no";

            arr.shift()
        } 
    }

    if (arr.length === 0) {
        return "yes";
    } else {
        return "no";
    }
};

let result = "";

for (let i=0; i<iLen; ++i) {
    result += vps(input[i]) + "\n";    
}

console.log(result);