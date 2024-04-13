const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(e => +e);
input = input.map(str => str.trim().split(' ').map(char => +char));

let max = 0;
/**
 * 
 * @param {*} count 
 * @param {*} x 
 * @param {*} y 
 * @param {*} sum 
 * @param {*} last_direction 북 0 동 1 남 2 서 3
 * @returns 
 */
function find_max(count, x, y, sum, last_direction) {
    //먼저 
    sum += input[x][y];

    if (count == 4) {
        if (sum > max) {
            max = sum;
            return;
        }
    }

    

    let next_direction = [true, true, true, false];

    if (last_direction != null) {
        next_direction[(last_direction+2) % 4] = false;
    }
    for (let i=0; i<4; ++i) {
        if (next_direction[i] == true) {
            if (i == 0 && (x-1 < 0)) {
                next_direction[i] = false;
            } else if (i == 1 && (y+1 > M-1)) {
                next_direction[i] = false;
            } else if (i == 2 && (x+1 > N-1)) {
                next_direction[i] = false;
            } 
        }
    }

    for (let i=0; i<4; ++i) {
        let n_x = x, n_y = y;

        if (next_direction[i]) {
            if (i == 0) {
                n_x--;
                find_max(count+1, n_x, n_y, sum, i);
            } else if (i == 1) {
                n_y++;
                find_max(count+1, n_x, n_y, sum, i);
            } else if (i == 2) {
                n_x++;
                find_max(count+1, n_x, n_y, sum, i);
            } 
        }   
    }


}

for (i=0; i<N; ++i) {
    for(j=0; j<M; ++j) {
        find_max(1, i, j, 0, null);
    }
}

// ㅏ모양 해결하기

for (let i=0; i<N-2; ++i) {
    for (let j=0; j<M-1; ++j) {
        let sum = input[i][j] + input[i+1][j] + input[i+2][j] + input[i+1][j+1];

        if (sum > max) {
            max = sum;
        }
    }
}

// ㅓ
for (let i=0; i<N-2; ++i) {
    for (let j=0; j<M-1; ++j) {
        let sum = input[i+1][j] + input[i][j+1] + input[i+1][j+1] + input[i+2][j+1];

        if (sum > max) {
            max = sum;
        }
    }
}

// ㅗ
for (let i=0; i<N-1; ++i) {
    for (let j=0; j<M-2; ++j) {
        let sum = input[i+1][j] + input[i][j+1] + input[i+1][j+1] + input[i+1][j+2];

        if (sum > max) {
            max = sum;
        }
    }
}

// ㅜ
for (let i=0; i<N-1; ++i) {
    for (let j=0; j<M-2; ++j) {
        let sum = input[i][j] + input[i][j+1] + input[i+1][j+1] + input[i][j+2];

        if (sum > max) {
            max = sum;
        }
    }
}

console.log(max)