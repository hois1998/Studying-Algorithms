//테스트 케이스를 받고 각 케이스에서 나올 수 있는 경우의 수를 combinaiton을 이용해 구하는 것

//여전히 combination을 재귀함수를 통해 구현하고 있다.
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n").map(el => el.trim());
const testCase = parseInt(input.shift());
// console.log(input.map(el => el.trim()));

// //nCr
// const combination = (arr=[], candidates, r, startIdx=0) => {
//     const num = candidates.length;
//     let result = [];

//     for (let i=startIdx; i<num; ++i) {
//         let tempArr = [...arr];
//         // let nextCandi = candidates.filter(el => el !== candidates[i]);

//         tempArr = [...tempArr, candidates[i]];
//         // tempArr.push(candidates[i]);
        
//         if (tempArr.length === r) {
//             result = [...result, tempArr];
            
//         } else {
//             result = [...result, ...combination(tempArr, candidates, r, i+1)];
//         }
//     }

//     return result;
// }


function combination (N, candidates, arr=[], startIdx=0) {
    let len = candidates.length;
    let arrLen = arr.length;
    let resultArr = [];

    for (let i=startIdx; i<len; ++i) {
        let nextArr = [...arr, candidates[i]];

        if (arrLen+1 === N) {
            resultArr = [...resultArr, nextArr];        
        } else {
            resultArr = [...resultArr, ...combination(N, candidates, nextArr, i+1)];
        }
    }

    return resultArr;
} 

// console.log(combination(3, [1,2,3,4,5,6]));

let result = "";

for (let i=0; i<testCase; ++i) {
    let N = parseInt(input.shift());
    let arr = [];

    // 한 케이스의 옷과 옷카테고리 모두를 arr 배열에 넣기
    for (let j=0; j<N; ++j) {
        arr.push(input.shift().split(" "));
    }

    let obj = {};

    for (let j=0; j<N; ++j) {        
        if (!obj.hasOwnProperty(arr[j][1])) {
            obj[arr[j][1]] = 1;
        } else {
            obj[arr[j][1]]++;
        }
        
    }
    //각 옷 카테고리에 대해 몇 벌의 옷이 있는지 배열 만들었다.
    const list = Object.values(obj)
    const M = list.length;
    // // console.log(`옷 카테고리별 리스트\n`, list);
    
    // let sum = 0;

    // for (let j=1; j<=M; ++j) {
    //     let pickRes = combination(j, list);
    //     // console.log(`선택 수 ${j}\n`, pickRes);

    //     for (let eachPick of pickRes) {
    //         let tempMul = 1;

    //         for (let k=0; k<eachPick.length; ++k) {
    //             tempMul*=eachPick[k];
    //         }

    //         sum+= tempMul;
    //     }
    //     // console.log(`sum 중간 결과: ${sum}`);
    // }

    // console.log("\n\n");








    let tempMul = 1;

    for (let j=0; j<M; ++j) {
        tempMul *= list[j]+1;
    }

    sum = tempMul-1;



    result += sum + "\n";
}

console.log(result);

