//구현에 필요한 코드의 양이 많아서 그렇지 쉬운 문제이다
const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");
const N = parseInt(input.shift());
const half = N/2;

//contain 2D array of input to 'inputArr' var
/*
Array(6).map(...)하면 2d의 엘레멘트 하나를 바꿔도 모두 바꿔지는 문제가 생긴다
[...Array(N)].map(e => [...Array(M)])
*/
let inputArr = [...Array(N)].map(e => [...Array(N).fill(0)]);
// inputArr[0][0] = 1
// console.log(inputArr);

//fill the 'inputArr'
for (let i=0; i<N; ++i) {
    let tempArr = input[i].split(" ").map(e => parseInt(e));
    
    for (let j=0; j<N; ++j) {
        inputArr[i][j] = tempArr[j];
    }
}


//사용안함
// let idxArr = Array(N).fill(0).map((e,idx) => idx);
// // console.log(idxArr)

// //side effect가 존재하니 이를 없애보자.
// let combination = (count, newA, startIdx, result) => {
//     if (count === half) {
//         result = [...result, newArr];
//         return;
//     }

//     for (let i=startIdx; i<N; ++i) {
//         let newArr = [...newA, idxArr[i]];
//         combination(count+1, newArr, i+1);
//     }
// };

//experiment for delete side effects
// nCr
//const로 변경 
const combination0 = (arr, r, count=0, startIdx=0, result=[]) => {
    if (count === r) {
        return [result];
    }

    // let tempRes = [...result];  //수정필요
    let finalRes = [];

    for (let i=startIdx; i<arr.length; ++i) {
        let newRes = [...result, arr[i]];
        finalRes = [...finalRes, ...combination0(arr, r, count+1, i+1, newRes)];
    }

    return finalRes;
};

const summation = (arr, data) => {
    let sum = 0
    for (let el of arr) {
        sum += data[el[0]][el[1]];
        sum += data[el[1]][el[0]];
    }

    return sum;
}



let idxArr = [...Array(N).keys()];  //1 부터 갖고 있는 배열 만들기

let teamList = combination0(idxArr, N/2);
let teamLen = teamList.length;

// console.log(`idxArr\n`, idxArr, `\nteamList\n`, teamList)

let min = undefined;
let str = "";

//find opponent team to calculate total team strength points of each team
for (let i=0; i < teamLen; ++i) {
    let oppTeam = idxArr.filter(e => !teamList[i].includes(e)); //그 반대 것을 찾기 with includes()를 활용
    // console.log(teamList[i], oppTeam);

    let playerList1 = combination0(teamList[i], 2);
    let playerList2 = combination0(oppTeam, 2);
    let sum1 = summation(playerList1, inputArr);
    let sum2 = summation(playerList2, inputArr);
    // console.log(`playerList0\n`, playerList1, `\n1\n`, playerList2);

    let result = Math.abs(sum1 - sum2);

    if (min === undefined || result < min) {
        min = result;
        str = `playerList1\n${teamList[i]}\n\n playerList2\n${oppTeam}\n sum의 차:  ${min}`
    }
}

// console.log(str);
console.log(min)