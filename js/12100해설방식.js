const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const N = +input.shift();

input = input.map(str => str.split(' ').map(chr => +chr));


function rotate_clockwise(mat) {
    let new_mat = [...Array(N)].map(_ => [...Array(N)].fill(0));

    for (let r=0; r<N; ++r) {
        for (let c=0; c<N; ++c) {
            new_mat[c][N-r-1] = mat[r][c];
        }
    }

    return new_mat;
}

function up(mat) {
    let new_mat = [...Array(N)].map(_ => [...Array(N)].fill(0));

    for (let c=0; c<N; c++) {
        //flag는 new_mat에 새 데이터를 넣어주면 1바뀌는 값인데 이는 새로 넣어줄 때, 이전에 넣은 것과 값이 같아 서로 합쳐야 하는 상황에서는 합치는 과정이 2번 연속 발생되지 않도록 한다.
        let flag = 0, target = -1;

        for (let r=0; r<N; r++) {
            if (mat[r][c] == 0) {
                continue;
            }

            if (flag == 1 && mat[r][c] == new_mat[target][c] ) {
                new_mat[target][c] *=2;
                flag = 0;
            } else {
                target++;
                new_mat[target][c] = mat[r][c];
                flag = 1;
            }
        }
    }

    return new_mat;
}


function dfs(input, count) {
    if (count == 5) {
        let max = 0;

        for(let i=0; i<N; ++i) {
            for (j=0; j<N; ++j) {
                if (max < input[i][j]) {
                    max = input[i][j];
                }
            }
        }

        return max;
    }

    let result = [0, 0, 0, 0];

    for (let i=0; i<4; ++i) {
        let new_mat = up(input);
        result[i] = dfs(new_mat, count+1);
        input = rotate_clockwise(input)
    }

    return Math.max(...result);
}

console.log(dfs(input, 0))