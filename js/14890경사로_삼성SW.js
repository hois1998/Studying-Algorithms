const fs = require('fs');

let input = fs.readFileSync(`./test.txt`).toString().trim().split('\n');

let [N, L] = input.shift().trim().split(' ').map(e => +e);
input = input.map(str => str.trim().split(' ').map(chr => +chr));

// console.log(input)
let count = 0;

//for each row
for (let i=0; i<N; ++i) {
    let road_row = [];
    let road_col = [];
    
    let start_zero_row = true;
    let start_zero_col = true;

    if (input[i][0] < input[i][N-1]) {
        start_zero_row = false;
    }

    if (input[0][i] < input[N-1][i]) {
        start_zero_col = false;
    }


    for (let j=0; j<N; ++j) {
        if (start_zero_row) {
            road_row.push(input[i][j]);
        } else {
            road_row.unshift(input[i][j]);
        }

        if (start_zero_col) {
            road_col.push(input[j][i]);
        } else {
            road_col.unshift(input[j][i]);
        }
    }

    count += can_be_road(road_row);    
    count += can_be_road(road_col);
}

function can_be_road(arr) {
    let l = 0;
    let temp_height = arr[0];
    let go_down = false;
    let start_idx = 0;

    for (let j=0; j<N; ++j) {
        if (arr[j] == temp_height) {
            l++;
        } else {
            if (arr[j]-temp_height == 1) {
                if (go_down) {
                    l -= L;
                }
                if (l < L) {
                    return 0;
                }
                go_down = false;
                l=1;
                temp_height = arr[j];
            } else if (arr[j]-temp_height == -1) {
                let temp_count = 0;
                temp_height = arr[j];

                for (let k=j;k<N;k++) {
                    if(arr[k] == temp_height) {
                        temp_count++;
                    } else {
                        break;
                    }
                }

                if (temp_count < L) {
                    return 0;
                }

                go_down = true;
                l = 1;                
            } else {
                return 0;
            }
        }
    }

    return 1;
}

console.log(count);