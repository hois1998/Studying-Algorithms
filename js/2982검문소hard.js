// // 입력되는 input의 길이는 최대 100개이고 각 엔트리는 1~10^9으로 엄청난 범위를 갖는다.  
// const fs = require("fs");
// let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(e => +e);

// input.shift();

// input = input.sort((a, b) => a-b);
// let len = input.length;

// let min = input[0];

// // input two natural number and get the greatest comman divisor by euclide algorithm
// const getGcd = (a, b) => {
//     while (b !== 0) {
//         let temp = a % b;   //reminder becomes quotient
//         a = b;
//         b = temp;
//     }

//     return a;
// };

// //이걸 이용해 gcd에 있는 소수가 무엇인지 알아내고 그것으로 input의 gcd를 구하기 위해 
// //각 소수로 나머지가 0임을 유지할 때까지 나눠주며 그 나눠준 횟수를 센다. 
// //factorization of prime factor
// const fac = (num) => {
//     let arr = [];

//     for (let i=2; num !== 1; ++i) {    //여기가 헷갈리는데 i가 11이면 11*10까지는 이미 이전 소수에서 다 확인을 하기때문에  
//         let cnt = 0;

//         while (num % i === 0) {
//             num /= i;
//             cnt++;
//         }
        
//         if (cnt !==0)
//             arr.push([i, cnt]);
//     }

//     return arr;
// };

// // console.log(fac(10));

// const checkGcd4List = gcd => {
//     for (let i=2; i<len; ++i) {
//         if (input[i] % gcd !==0) {
//             return false;
//         }
//     }

//     return true;
// };

// let primeFacList = [];

// //나머지를 변경하며 구하는 방법은 
// for (let i=0; i<=min; ++i) {
//     let refinedInput = input.map(e => e-i);

//     //i==min일 땐 input[0] - i대신 input[0]을 그냥 사용
//     if (i === min) {
//         refinedInput[0] = i;
//     }

//     let gcd = getGcd(refinedInput[0], refinedInput[1]);

//     //gcdSet에 최종적으로 찾은 gcd만 넣는다. 
//     // gcd구하자마자 넣지 않는 것은 다른 나머지에 대해서는 또 얻은 gcd가 ...
//     // 근데 gcd를 소인수 분해했을 때 그 중에서 원래는 나눠지지 않던 제수가 나눠질 수도 있잖아 
//     //결론적으로 gcdSet이 불필요

//     if (gcd !== 1) {
//         //gcd를 소인수분해
//         primeFacList = fac(gcd);

//         let primeFacListLen = primeFacList.length;
//         let dividingInput = [...refinedInput];
//         let cntPrime = 0;

//         for (let j=0; j<primeFacListLen;) {
//             let tempPrime = primeFacList[j][0];
//             let notDivided = false;
            
//             for (let k=0; k<len; ++k) {
//                 if (input[k] % tempPrime !== 0) {
//                     notDivided = true;
//                     j++;
//                     break;
//                 }
//             }

//             if (notDivided) {
                
//             } else {
//                 dividingInput = dividingInput.map(e => e/tempPrime);
//             }
//         }
//         let divisor = 2;

//         while (gcd !== 1) {
//             while (gcd % divisor === 0) {
                
//             }
//         }
//         let maxVal = 0;
//         //다른 input원소에 대해서도 모두 동일한 나머지를 배출하는지 확인
//         primeFacList.forEach(e => {
//             if (e[1] > maxVal) {
//                 maxVal = e[1];
//             }
//         });

//         for (let i=1; i<=maxVal; ++i) {
            
//         }
//     }
// }