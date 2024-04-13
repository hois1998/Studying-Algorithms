const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const N = +input.shift();

input = input.map(str => str.split(' ').map(chr => +chr));

function move4Direction(mat, count) {

    let direction_max = [null, null, null, null];

    if (N == 1) {
        return mat[0][0];
    }

    // let four_new_mat = [null, null, null, null];
    
    for(let i=0; i<4; ++i) {

        // 새 메트릭스를 만든다
        let new_mat = [...Array(N)].map(_ => [...Array(N)].fill(0));

        if (i%2==0) {
            for (let c=0; c<N; ++c) {
                let target = -1, flag = 0;

                // up
                if (i == 0) {
                    for (let r=0; r<N; ++r) {
                        if (mat)
                        if (flag == 1 && mat[r][c] == new_mat[target][c]) {
                            new_mat[target][c] *=2;
                            flag = 0;
                        } else {

                        }
                    }
                } 

                if (i == 2) {

                }
                // 기존 idx==c인 열을 가져온다
                // for (let j=0; j<N; ++j) {
                //     if (mat[j][c] != 0) {
                //         col.push(mat[j][c]);
                //     }
                // }
                
                // 위로 옮기는 행위면 col의 인덱스 0부터 아래로 옮기면 col의 높은 인덱스부터
                //new_col을 생성
                if (i==0) { //up
                    while(col.length != 0) {
                        let e = col.shift();

                        if (col.length > 0 && e == col[0]) {
                            new_col.push(e*2);
                            col.shift();
                        } else {
                            new_col.push(e);
                        }
                    }
                } else {    // 아래로 옮기는 경우
                    while(col.length != 0) {
                        let e = col.pop();

                        if (col.length > 0 && e == col[col.length-1]) {
                            new_col.push(e*2);
                            col.pop();
                        } else {
                            new_col.push(e);
                        }
                    }
                }

                //새 메트릭스에 컬럼별로 업뎃
                if (i==0) {
                    for (let j=0; j<new_col.length; ++j) {
                        four_new_mat[i][j][c] = new_col[j];
                    }
                } else {
                    for (let j=0; j<new_col.length; ++j) {
                        four_new_mat[i][N-j-1][c] = new_col[j];
                    }
                }
                
            }
        } else {
            for (let r=0; r<N; ++r) {
                let new_row = [];
                let row = [];

                for (let j=0; j<N; ++j) {
                    if (mat[r][j] != 0) {
                        row.push(mat[r][j]);
                    }
                }

                //  마찬가지로 오른쪽 밀긴지 왼쪽인지 따라 row를 달리 활용
                if (i == 1) {
                    while(row.length != 0) {
                        let e = row.pop();

                        if (row.length > 0 && e == row[row.length-1]) {
                            new_row.push(e*2);
                            row.pop();
                        } else {
                            new_row.push(e);
                        }
                    }
                } else {
                    while(row.length != 0) {
                        let e = row.shift();

                        if (row.length > 0 && e == row[0]) {
                            new_row.push(e*2);
                            row.shift();
                        } else {
                            new_row.push(e);
                        }
                    }
                }


                // new_row구했다 이제 new_mat에 넣자
                if (i==1) {
                    for (let j=0; j<new_row.length; ++j) {
                        four_new_mat[i][r][N-j-1] = new_row[j];
                    }
                } else {
                    for (let j=0; j<new_row.length; ++j) {
                        four_new_mat[i][r][j] = new_row[j];
                    }
                }
                
            }
        }

        // console.log(`direction`, i)
        // console.log(`count`, count)
        // console.log(four_new_mat[i]);

        if (count < 5) {
            direction_max[i] = move4Direction(four_new_mat[i], count+1);
        } else {
            let max = 0;

            for (let j=0; j<N; j++) {
                for (let k=0; k<N; k++) {
                    if (four_new_mat[i][j][k] > max) {
                        max = four_new_mat[i][j][k];
                    }
                }
            }

            return max;
        }
    }

    return Math.max(...direction_max);
}

let result = move4Direction(input, 0);
console.log(result)