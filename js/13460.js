const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(e => +e);
input  = input.map(str => str.trim().split(''));

const WALL = '#', R = 'R', B = 'B', ROAD = '.', H  = 'O';

let init_rx, init_ry, init_bx, init_by, hx, hy;

for (let i=0; i < N; ++i) {
    for (let j=0; j<M; ++j) {
        if (input[i][j] == 'R') {
            init_rx = i;
            init_ry = j;
        } else if (input[i][j] == 'B') {
            init_bx = i;
            init_by = j;
        } else if (input[i][j] == 'O') {
            hx = i;
            hy = j;
        }
    }
}

// console.log(init_rx, init_ry, init_bx, init_by, hx, hy)

//방향은 위, 오른, 아래, 왼 순으로 0,1,2,3의 idx활용
function redBallFindHole(input, count, last_direction, rx, ry, bx, by, hx, hy) {
    // console.log(input.join('\n'))
    //don't move to such direction: opposite direction of past step
    let not_going_direciton = [(last_direction + 2) % 4, last_direction];

    // don't move to such direction which is barriered
    let barriered = [false, false, false, false];
    
    if (input[rx-1][ry] == WALL || input[rx-1][ry] == B) {
        barriered[0] = true;
    } 
    if (input[rx][ry+1] == WALL || input[rx][ry+1] == B) {
        barriered[1] = true;
    }
    if (input[rx+1][ry] == WALL || input[rx+1][ry] == B) {
        barriered[2] = true;
    }
    if (input[rx][ry-1] == WALL || input[rx][ry-1] == B) {
        barriered[3] = true;
    }

    // even if red ball is barriered, we make move if blue can move
    if (input[bx-1][by] == ROAD) {
        barriered[0] = false;
    } 
    if (input[bx][by+1] == ROAD) {
        barriered[1] = false;
    }
    if (input[bx+1][by] == ROAD) {
        barriered[2] = false;
    }
    if (input[bx][by-1] == ROAD) {
        barriered[3] = false;
    }

    // 처음에는 모든 방향으로 이동
    if (count === 0) {
        not_going_direciton = [5, 5];
    }

    let direction_result = [-1, -1, -1, -1];

    for (let i=0; i<4; ++i) {
        if (!not_going_direciton.includes(i) && !barriered[i]) {
            const move_first = whichMoveFirst(rx, ry, bx, by, i);
            let n_rx, n_ry, n_bx, n_by;

            // input복사하기
            let new_input = [...Array(N)].map(_ => [...Array(M)]);
            for (let i=0; i<N; ++i) {
                for (let j=0; j<M; ++j) {
                    new_input[i][j] = input[i][j];
                }
            }

            if (move_first == R) {
                let next_r = moving(rx, ry, R, i, new_input);
                new_input[rx][ry] = ROAD;

                if (typeof(next_r) != 'number') {
                    [n_rx, n_ry] = next_r;
                    new_input[n_rx][n_ry] = R;
                }

                let next_b = moving(bx, by, B, i, new_input);

                if (typeof(next_b) == 'number') {
                    direction_result[i] = -1;
                    break;
                }

                if (next_r == 1) {
                    return count+1;
                }

                [n_bx, n_by] = next_b;
                new_input[bx][by] = ROAD;
                new_input[n_bx][n_by] = B;
            } else {
                let next_b = moving(bx, by, B, i, new_input);

                if (typeof(next_b) == 'number') {
                    direction_result[i] = -1;
                    break;
                }

                [n_bx, n_by] = next_b;
                new_input[bx][by] = ROAD;
                new_input[n_bx][n_by] = B;

                let next_r = moving(rx, ry, R, i, new_input);

                if (typeof(next_r) == 'number') {
                    return count+1;
                }

                [n_rx, n_ry] = next_r; 

                new_input[rx][ry] = ROAD;
                new_input[n_rx][n_ry] = R;
            }

            if (count < 10) {
                direction_result[i] = redBallFindHole(new_input, count+1, i, n_rx, n_ry, n_bx, n_by, hx, hy);
            } else {
                direction_result[i] = -1;
            }
        }
    }

    let min_count = 100;
    for (let i=0; i<4; ++i) {
        if (direction_result[i] !== -1) {
            if (direction_result[i] < min_count) {
                min_count = direction_result[i];
            }
        }
    }

    if (min_count == 100) {
        return -1;
    } else {
        return min_count;
    }
}

// 만약 이동하다가 아무문제 없으면 리턴 근데 벽만나거나 
function moving(x, y, flag, direction, input) {
    let redBallFind = false

    if (direction == 0) {
        let i = 1;

        while(true) {
            let new_loc = input[x-i][y];

            if (new_loc == ROAD) {
                i++;
            } else {
                //H or WALL or other BALL
                if (new_loc !== H) {
                    return [x-i+1, y];
                } else {
                    if (flag == R) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
        }
    } else if (direction == 1) {
        let i=1;

        while(true) {
            let new_loc = input[x][y+i];

            if (new_loc == ROAD) {
                i++;
            } else {
                if (new_loc != H) {
                    return [x, y+i-1];
                } else {
                    if (flag == R) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
        }

    } else if (direction == 2) {
        let i = 1;

        while(true) {
            let new_loc = input[x+i][y];

            if (new_loc == ROAD) {
                i++;
            } else {
                if (new_loc != H) {
                    return [x+i-1, y];
                } else {
                    if (flag == R) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
        }

        
    } else {
        let i=1;

        while(true) {
            let new_loc = input[x][y-i];

            if (new_loc == ROAD) {
                i++;
            } else {
                if (new_loc != H) {
                    return [x, y-i+1];
                } else {
                    if (flag == R) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
        }
    }
}

function whichMoveFirst(rx, ry, bx, by, direction) {
    if (direction == 0) {
        if (ry == by) {
            if (bx < rx) {
                return B;
            }
        }
    } else if (direction == 1) {
        if (rx == bx) {
            if (ry < by) {
                return B;
            }
        }
    } else if (direction == 2) {
        if (ry == by) {
            if (bx > rx) {
                return B;
            }
        }
    } else {
        if (rx == bx) {
            if (by < ry) {
                return B;
            }
        }
    }

    return R;
}
result = redBallFindHole(input, 0, null, init_rx, init_ry, init_bx, init_by, hx, hy);

if (!result) {
    console.log(-1);
} else {
    console.log(result);
}