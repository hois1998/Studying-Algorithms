//stack은 LIFO(last in first out)을 따른다. 
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(str => str.trim());

input.shift();

let iLen = input.length;

let arr = [];

const vps = str => {
    let len = str.length;
    let arr = [];

    for (let i=0; i<len; ++i) {
        if (str[i] === "(") {
            arr.push(0);
        } else if (str[i] === ")" && arr.length > 0) {
            arr.pop();
        } else {
            return "NO";
        }
    }

    if (arr.length === 0) {
        return "YES";
    } else {
        return "NO";
    }
};

let result = "";

for (let i=0; i<iLen; ++i) {
    result += vps(input[i]) + "\n";
}

console.log(result);


















// const vps = (str) => {
//     let len = str.length;
//     let cnt = 0;

//     for (i=0; i<len; ++i) {
//         if (str[i] === "(") {
//             cnt++;
//         } else if (str[i] === ")" && cnt === 0) {
//             return "NO";
//         } else {
//             for (let j=0; j<cnt; ++j) {
//                 if (str[i+j] === "(")   return "NO";
//             }
//             i += cnt-1;
//             cnt = 0;
//         }
//     }

//     return "YES";
// };

// let result = "";

// for (let i=0; i<iLen; ++i) {
//     result += vps(input[i]) + "\n";
// }

// console.log(result);



