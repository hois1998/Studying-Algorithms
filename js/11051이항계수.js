//이항계수를 구하는 문제이다
//근데 수의 범위가 매우 커지는 문제가 있다. 그래서 출력식 NaN으로 출력되는 문제가 있다. 

//1.이문제는 이향계수의 속성을 아용하는 것이다. 만약이 이러한 특성이 없었다면 이 문제의 답을 구하기 어려웠을 것이다. 

// n=0 1   
// n=1 1   1
// n=2 1   2   1
// n=3 1   3   3   1
// n=4 1   4   6   4   1
//           .
//           .
//           ,

//2.1000C500은 너무 큰 수를 의미하게 된다. 

const fs = require("fs");
let [N, M] = fs.readFileSync("./test.txt").toString().trim().split(" ").map(char => parseInt(char));

// console.log(N, M)
N = 1000;
let coeffContainer = Array(N+1).fill(0).map(_ => [...Array(N+1)].fill(0));

coeffContainer[0][0] = 1;
// console.log(coeffContainer)

for (let i=1; i<N+1; ++i) {
    for (let j=0; j<=i; ++j) {
        if (j === 0 || j === i) {
            coeffContainer[i][j] = 1;
        } else {
            coeffContainer[i][j] = (coeffContainer[i-1][j-1] + coeffContainer[i-1][j]) ;
        }
    }
}

console.log(coeffContainer[1000][500]);
// const coeff = (N, M) => {
//     if (Math.round(N/2) < M) {
//         M = N - M;
//     }

//     let result = 1;
//     for (let i=1; i<=M; ++i) {
//         result *= N; 
//         result /= i;
//         result %= 10007;
//         N--;
//     }

//     return result;
// };

// console.log(coeff(N, M) % 10007);