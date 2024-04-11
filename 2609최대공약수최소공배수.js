const fs = require("fs");
const [n1, n2] = fs.readFileSync("./test.txt").toString().trim().split(" ").map(e => +e);

let min = n1 >= n2 ? n2 : n1;
let gcd;

// console.log(n1, n2, min)

for (let i=min; i>=1; --i) {
    if (n1 % i === 0 && n2 % i === 0) {
        gcd = i;
        break;
    }
}

console.log(gcd);
console.log(n1 * n2 / gcd);