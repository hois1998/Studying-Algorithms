// 압축하는 방법의 하나로 쿼드트리라는 것이 있는데 이를 프로그래밍으로 구현한다. 2630재귀와 비슷하다.

const fs = require("fs");
const addr = process.platform === "win32" ? "./test.txt" : "/dev/stdin";
let input = fs.readFileSync(addr).toString().trim().split("\n");
let num = +input.shift();

input = input.map(e => e.split("").map(chr => +chr));

// console.log(input, addr);
 
const colorCheck =(num, input) => {
    if (num === 1) {
        return input[0][0];
    }

    let initColor = input[0][0];
    let isConsistent = true;

    for (let i=0; i<num; ++i) {
        for (let j=0; j<num; ++j) {
            if (input[i][j] !== initColor) {
                isConsistent = false;
                break;
            }
        }

        if (!isConsistent) break;
    }

    if (isConsistent) {
        return initColor;
    } else {
        let limitIdx = num/2;

        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        
        for (let j=0; j<limitIdx; ++j) {
            let temp1 = [];
            let temp2 = [];
            for (let k=0; k<num/2; ++k) {
                temp1.push(input[j][k]);
                temp2.push(input[j+num/2][k]);
            }
            
            arr1.push(temp1);
            arr3.push(temp2);
            temp1 = [];
            temp2 = [];

            for (let k=num/2; k<num; ++k) {
                temp1.push(input[j][k]);
                temp2.push(input[j+num/2][k]);
            }
            arr2.push(temp1);
            arr4.push(temp2);
        }

        return `(${colorCheck(num/2, arr1)}${colorCheck(num/2, arr2)}${colorCheck(num/2, arr3)}${colorCheck(num/2, arr4)})`;
    }
};

console.log(colorCheck(num, input));
