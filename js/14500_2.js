/**
 * 해설
 * 나랑 비슷하게 모두 19가지 종류의 블록을 활용하면 된다. 
 * 근데 접근이 다른데 16by16의 블록을 가져다가 죄측상단에 19가지를 붙여 놓고 블록을 input에서 이동시키면서 새롭게 이동한 좌표에서 19가지 중 max를 찾는다. 근데 중요한점은 input을 가로 세로 3씩 늘려주는 것이다. 그래야지 16by16블록이 에러없이 모든 input에 대한 이동이 가능하다.
 * 
 * 브루트포스(전탐색 알고리즘)
 */

const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(e => +e);
input = input.map(str => str.trim().split(' ').map(char => +char));

let max = 0;

for(let i=0; i<N; ++i) {
    for (let j=0; j<M-2; ++j) {
        let sum = input[i][j] + input[i][j+1] + input[i][j+2];

        let arr =[[i-1, j], [i-1, j+1], [i-1, j+2], [i, j+3], [i+1, j+2], [i+1, j+1], [i+1, j]];

        let last_max = 0;
        for (let coord of arr) {
            let x = coord[0], y = coord[1];
            if (x >= 0 && x < N && y >= 0 && y <M) {
                if (last_max < input[x][y]) {
                    last_max = input[x][y];
                }
            }
        }

        sum += last_max;

        if (sum > max) {
            max = sum;
        }
    }
}

for(let i=0; i<N-2; ++i) {
    for (let j=0; j<M; ++j) {
        let sum = input[i][j] + input[i+1][j] + input[i+2][j];

        let arr =[[i, j-1], [i+1, j-1], [i+2, j-1], [i+3, j], [i+2, j+1], [i+1, j+1], [i, j+1]];

        let last_max = 0;
        for (let coord of arr) {
            let x = coord[0], y = coord[1];
            if (x >= 0 && x < N && y >= 0 && y <M) {
                if (last_max < input[x][y]) {
                    last_max = input[x][y];
                }
            }
        }

        sum += last_max;

        if (sum > max) {
            max = sum;
        }
    }
}

for(let i=1; i<N; ++i) {
    for (let j=0; j<M-1; ++j) {
        let sum = input[i][j] + input[i][j+1] + input[i-1][j+1];

        let arr =[[i-1, j], [i+1, j], [i-1, j+2]];

        let last_max = 0;
        for (let coord of arr) {
            let x = coord[0], y = coord[1];
            if (x >= 0 && x < N && y >= 0 && y <M) {
                if (last_max < input[x][y]) {
                    last_max = input[x][y];
                }
            }
        }

        sum += last_max;

        if (sum > max) {
            max = sum;
        }
    }
}

for(let i=0; i<N-1; ++i) {
    for (let j=0; j<M-1; ++j) {
        let sum = input[i][j] + input[i][j+1] + input[i+1][j+1];

        let arr =[[i-1, j], [i+1, j+2]];

        let last_max = 0;
        for (let coord of arr) {
            let x = coord[0], y = coord[1];
            if (x >= 0 && x < N && y >= 0 && y <M) {
                if (last_max < input[x][y]) {
                    last_max = input[x][y];
                }
            }
        }

        sum += last_max;

        if (sum > max) {
            max = sum;
        }
    }
}

console.log(max)