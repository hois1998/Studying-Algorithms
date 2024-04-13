const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(e => +e);
let max = 0;
virus = [];

input = input.map((str, x) => str.trim().split(' ').map((chr, y) => {
    let num = +chr;

    if (num == 2) {
        virus.push([x, y]);
    }
    return num;
}));


// console.log(virus)
// console.log(input)

//벽의 자리 모두 옮기기
//벽1
for (let i=0; i<N; ++i) {
    for (let j=0; j<M; ++j) {

        //벽2
        for (let k=i; k<N; ++k) {
            let l=0;

            if (k == i) {
                l=j+1
            }

            for (; l<M; ++l) {


                //벽3
                for (let m=k; m<N; ++m) {
                    let n=0;

                    if (m == k) {
                        n=l+1;
                    }

                    for (; n<M; ++n) {
                        if (input[i][j] != 0 || input[k][l] != 0 || input[m][n] != 0) {
                            continue;
                        }

                        copied_arr = deepcopy2D(input);
                        copied_arr[i][j] = 1;
                        copied_arr[k][l] = 1;
                        copied_arr[m][n] = 1;

                        //만들어진 벽으로 바이러스 전파
                        for (let i=0; i<virus.length; ++i) {
                            let [x, y] = virus[i];

                            if (x-1 >= 0) {
                                spread_virus_check_safezone(x-1, y);
                            }

                            if (y+1 < M) {
                                spread_virus_check_safezone(x, y+1);
                            }

                            if (x+1 < N) {
                                spread_virus_check_safezone(x+1, y);
                            }

                            if (y-1 >= 0) {
                                spread_virus_check_safezone(x, y-1);
                            }
                        }

                        let safe = 0;

                        for (let s_i=0; s_i<N; ++s_i) {
                            for (let s_j=0; s_j<M; ++s_j) {
                                if (copied_arr[s_i][s_j] == 0) {
                                    safe++;
                                }
                            }
                        }

                        if (safe > max) {
                            max = safe;
                        }
                    }
                }
            }
        }
    }
}

function deepcopy2D(arr) {
    let new_arr = [...Array(N)].map((_, idx) => [...arr[idx]]);
    
    return new_arr;
} 

function spread_virus_check_safezone(x, y) {
    if (copied_arr[x][y] != 0) {
        return;
    }

    copied_arr[x][y] = 2;
    
    if (x-1 >= 0) {
        spread_virus_check_safezone(x-1, y);
    }

    if (y+1 < M) {
        spread_virus_check_safezone(x, y+1);
    }

    if (x+1 < N) {
        spread_virus_check_safezone(x+1, y);
    }

    if (y-1 >= 0) {
        spread_virus_check_safezone(x, y-1);
    }
}

console.log(max);
// let temp = deepcopy2D(input)
// temp[0][0] = 100;
// console.log(temp);
