const fs = require("fs");
const addr = process.platform === "win32" ? "./test.txt" : "/dev/stdin";
let input = fs.readFileSync(addr).toString().trim().split("\n");
let num = +input.shift();

input = input.map(e => e.split(" ").map(chr => +chr));
result = [0, 0] //white, blue

// console.log(input, addr);
 
const colorCheck =(num, input) => {
    if (num === 1) {
        result[input[0]]++;
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
        result[initColor]++;
    } else {
        let startIdx = 0;
        let limitIdx = num/2;

        for (let i=0; i<=1; ++i) {
            let arr1 = [];
            let arr2 = [];
            for (let j=startIdx; j<limitIdx; ++j) {
                let temp = []
                for (let k=0; k<num/2; ++k) {
                    temp.push(input[j][k]);
                }
                arr1.push(temp);
                temp = [];
                for (let k=num/2; k<num; ++k) {
                    temp.push(input[j][k])
                }
                arr2.push(temp);
            }

            colorCheck(num/2, arr1);
            colorCheck(num/2, arr2);

            startIdx += num/2;
            limitIdx += num/2;
        }
    }
}

colorCheck(num, input);
console.log(result.join("\n"));
