//Solving Sdoku

/*
스도쿠 문제에 공란이 뚫려 있는 채로 입력을 받아 이 스도쿠 자체를 풀어서 출력하는 문제이다. 
*/

/*
주의 
시간초과 에러가 나왔는데 이는 idFind변수로 해결했으며
답이 여러개인 문제가 있을 수 있으나 한번만 결과가 출력되도록 해야 한다.
*/

const fs = require("fs");
const blanks = [];

//sdoku 2D 배열을 만들면서 동시에 채워야할 포인트 찾기
const input = fs.readFileSync("./test.txt").toString().trim().split("\n").map((str,i) => {
    return str.split(" ").map((e, j) => {
        let intE = parseInt(e);
        if (intE === 0) {
            blanks.push([i, j]);
        }
        return intE;
    })
});

// console.log(`input\n`, input ,`\n\nblanks\n`, blanks);

//2d array
// let arrTemp = [...Array(arr.length)].map((e, idx) => {
//     return [...arr[idx]];
// });

const squareCond = (sdoku, candidates, i, j) => {
    if (!Array.isArray(sdoku) || !Array.isArray(candidates)) {
        console.log('not array in squareCondition');
        return;
    }

    const rowQutient = Math.floor(i/3);
    const colQutient = Math.floor(j/3);
    
    let squareHave = [];
    
    for (let k=3*rowQutient; k<3*rowQutient+3; ++k) {
        for (let l=3*colQutient; l<3*colQutient+3; ++l) {
            if (sdoku[k][l] !== 0)  squareHave.push(sdoku[k][l]);        
        }
    }

    return candidates = candidates.filter(e => !squareHave.includes(e));
};

const lineCond = (sdoku, candidates, i, j, rowOrCol) => {
    //row에 대해 먼저 만들어 보자
    let lineHave = [];
    const l = rowOrCol === "row" ? j : i;
    const m = rowOrCol === "row" ? i : j;


    const selectEl = (a, b) => {
        if (rowOrCol === "row") {
            return sdoku[a][b];
        } else return sdoku[b][a];
    };
    
    for (let k=0; k<9; ++k) {
        if (!(k === l) && selectEl(m, k) !== 0) {
            lineHave.push(selectEl(m, k));
        }
    }

    return candidates = candidates.filter(e => !lineHave.includes(e));
}


// let temp = lineCond(input, [1,2,3,4,5,6,7,8,9], 1, 4, "col");
// console.log(temp)
const N = blanks.length;
let ans = "";
let isFind = false;

const dfs = (sdoku, coordList, count) => {
    //count를 통해서 모든 블랭크에 대해 다 찾아졌는지 체크 
    //count 대신 coordList가 0인 순간에 return할 수도 있지 않을까?

    if (coordList.length === 0) {
        if (!isFind) {
            isFind = true;
            for (let i=0; i<9; ++i) {
                for (let j=0; j<9; ++j) {
                    ans += sdoku[i][j]+ (j === 8 ? "" : " "); 
                }

                ans += "\n";
            }
        }
        return ;
    }

    const [i, j] = coordList[0];
    let candi = [1,2,3,4,5,6,7,8,9];

    candi = squareCond(sdoku, candi, i, j);
    // console.log(`after squre condition\n`, candi);

    candi = lineCond(sdoku, candi, i, j, "row");
    // console.log(`after row condition\n`, candi);

    candi = lineCond(sdoku, candi, i, j, "col");
    // console.log(`after col condition\n`, candi);

    for (let k=0; k<candi.length; ++k) {
        let copySdoku = [...Array(9)].map((e, idx) => [...sdoku[idx]]);
        copySdoku[i][j] = candi[k];
        // console.log(copySdoku);
        // console.log(sdoku);

        let copyCoordList = coordList.filter((e, idx) => idx !== 0);
        if (!isFind)
            dfs(copySdoku, copyCoordList, count+1);
    }
};


dfs(input, blanks, 0);
console.log(ans);