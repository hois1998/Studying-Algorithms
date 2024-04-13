//연산자 끼워넣기


//역시 쉬운 문제인데 다만 현재는 채화가 안됐기에 어렵게 느낀다.
//어렵게 느끼는 부분은  loop를 돌리기

/*
규칙
배열이 N개의 원소를 가지면 사칙연산의 개수는 N-1개이다. 
목표는 N-1개의 배열에 어떤식으로 연산의 순서를 넣을 것이냐이다. 
배열에 /면 0 *면 1 -면 2 +면 3을 넣는 식으로 진행
배열에 마지막 연산인 +는 안해도 된다. 
*/

const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const inputArr = input[1].split(" ").map(e => parseInt(e));
const operators = input[2].split(" ").map(e => parseInt(e));
const N = inputArr.length;

// console.log(`inputArr\n${inputArr}\n\noperators\n${operators}`);

let container = [[...Array(N-1).fill(null)]];
let opRes = [];

const combination = (container, opType, count, countEnd, startIdx=0) => {
    let len = container.length;
    if (count === countEnd) {
        return [container];
    }

    let containerRes = [];

    for (let i=startIdx; i<len; ++i) {
        let tempContainer = [...container];
        
        if (tempContainer[i] === null) {
            tempContainer[i] = opType;
            containerRes = [...containerRes, ...combination(tempContainer, opType, count+1, countEnd, i+1)];
        }
    }

    return containerRes;
}

// let abc = combination([ 3, 3, null, null, null ], 2, 0, operators[1], 0);
// console.log(abc) 

let final = [];
for (let i=3; i>=0; --i) {
    //+하기에 대해선 따로 연산 없어도 된다. 
    if (i === 0) {
        for (let j=0; j<container.length; ++j) {
            container[j] = container[j].map(e => {
                if (e === null) {
                    return 0;
                } else {
                    return e
                }
            })
        }

    } else {
        let tempC = [];

        for (let j=0; j<container.length; ++j) {
            tempC = [...tempC, ...combination(container[j], i, 0, operators[3-i])];
        }

        container = tempC;
        
    }


}
let min = undefined, max = undefined;

for (let i=0; i<container.length; ++i) {
    let op = container[i];
    
    let result = 0;
    for (let j=0; j<op.length; ++j) {
        
        if (j === 0) { 
            result = inputArr[0];
        }

        if (op[j] === 3) {
            result += inputArr[j+1];
        } else if (op[j] === 2) {
            result -= inputArr[j+1]
        } else if (op[j] === 1) {
            result *= inputArr[j+1];
        } else {
            if (result < 0) {
                result = -Math.floor(-result / inputArr[j+1]);
            } else {
                result = Math.floor(result / inputArr[j+1]);
            }
        }
    }

    if (min == undefined || result < min) {
        min = result;
    }

    if (max == undefined || result > max) {
        max = result;
    }
}

console.log(`${max}\n${min}`);
//변수들 위쪽으로 모아주자