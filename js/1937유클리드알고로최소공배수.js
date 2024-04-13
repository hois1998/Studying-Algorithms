//유클리드 알고리즘을 이용해 최대공약수를 구하고 이를 통해 최소공배수를 구하는 문제이다. 

const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\n");

let len = input.shift();
input = input.map(str => str.split(" ").map(e => +e));

let result = "";
let startTime = new Date
for (let k=0; k<10000; ++k) {
    for (let i=0; i< len; ++i) {
        let [n1, n2] = input[i];
        let quotient = n1
        let dividen = n2;

        // while (dividen % quotient !== 0) {
        //     let temp = quotient;
        //     quotient = dividen % temp;
        //     dividen = temp;
        // }
        
        while (quotient !== 0) {
            let r = dividen % quotient;
            dividen = quotient;
            quotient = r;
        }

        result += n1*n2 / dividen + "\n"; 
        
    }
}
console.log(result);