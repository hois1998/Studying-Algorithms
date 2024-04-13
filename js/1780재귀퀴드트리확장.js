// 압축하는 방법의 하나로 쿼드트리라는 것이 있는데 이를 프로그래밍으로 구현한다. 2630재귀와 비슷하다.

const fs = require("fs");
const addr = process.platform === "win32" ? "./test.txt" : "/dev/stdin";
let input = fs.readFileSync(addr).toString().trim().split("\n");
let num = +input.shift();
let result = [0, 0, 0];

input = input.map(e => e.split(" ").map(chr => +chr));

// console.log(input);
 
const colorCheck =(num, input) => {
    if (num === 1) {
        result[input[0][0]+1]++;
        return ;
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
        result[initColor+1]++;
    } else {
        let nextSize = num/3;

        for (let i=0; i<num; i+=nextSize) {
            let arr1 = [];
            let arr2 = [];
            let arr3 = [];

            for (let j=i; j<i+nextSize; ++j) {
                let k=0
                let temp = [];
                for (; k<nextSize; ++k) {
                    temp.push(input[j][k]);
                }
                arr1.push(temp);
                temp = [];

                for (; k<2*nextSize; ++k) {
                    temp.push(input[j][k]);
                }
                arr2.push(temp);
                temp = [];

                for (; k<3*nextSize; ++k) {
                    temp.push(input[j][k])
                }
                arr3.push(temp)
            }

            colorCheck(nextSize, arr1);
            colorCheck(nextSize, arr2);
            colorCheck(nextSize, arr3);
               
        }
    }
};

colorCheck(num, input)
console.log(result.join("\n"));
