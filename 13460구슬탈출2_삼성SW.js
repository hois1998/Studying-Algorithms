// 전략 
// 빨간구슬은 들어가고 파란구슬은 들어가면 안된다. 그러면 빨간구슬 파란 구슬 모두 위치 이동에 대한 추적
// 이 필요하겠다. 
// dfp방식으로 경로를 탐색하고 만약 딱 그 구멍 위치에 빨간구슬이 멈춰야지만 된다는 것이다.dfp방식으로

// case 1
// 5 5
// #####
// #..B#
// #.#.#
// #RO.#
// #####

// ans: 1

// case 2
// 3 10
// ##########
// #.O....RB#
// ##########

// ans: -1


// 애초에 문제를 잘못이해했다. case 2가 -1인 이유는 딱 빨간공이 멈췄을 때 홀에 들어가야 되기때문이라고 자의적으로 해석했으나 파란공 역시 들어가기 때문에 -1이었다.


const fs = require('fs');
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(str => str.trim());

// console.log(input)

const [M, N] = input.shift().split(' ').map(chr => +chr);
input = input.map(str => str.split(''));

// console.log(input);
let initR = null, initB = null;
let hole = null;

for (let i=1; i<M-1; ++i) {
    for (let j=1; j<N-1; ++j) {
        let inputE = input[i][j];
        
        if (inputE == 'R') {
            initR = [i, j];
            // input[i][j] = '.';
        }
        else if (inputE == 'B') {
            initB = [i, j];
            // input[i][j] = '.';
        } 
        else if (inputE == 'O') {
            hole = [i, j];
        }
        
    }
}


// console.log ('r', initR, 'b', initB, 'hole', hole);

const deepcopy2D = (matrix) => {
    let len = matrix.length

    let mat = [...Array(len)]

    matrix.forEach((arr, idx) => {
        mat[idx] = [...arr]
    })

    return mat
}


/**
 * 
 * @param {int} pDirection Direction에 대해 0은 up, 1 right, 2 down, 3 left 
 * @param {array} RLoc 
 * @param {array} BLoc 
 * @param {int} cnt 이전까지 총 이동횟수
 */
const findNextLoc = (pDirection, RLoc, BLoc, cnt, matrix) => {
    if (cnt >= 10) return -1;

    let rr = RLoc[0], rc = RLoc[1];
    let br = BLoc[0], bc = BLoc[1];
    let sameCol = false, sameRow = false;

    if (rr == br) sameRow = true;
    if (rc == bc) sameCol = true;
    
    // let upDiff = Math.abs(rr+1-(0+1));
    // let rightDiff = Math.abs(rc+1-(M-2));
    // let downDiff = Math.abs(rr+1-(N-2));
    // let leftDiff = Math.abs(rc+1-(0+1));
    
    // //blue ball diff
    // let upDiffB = Math.abs(br+1-(0+1));
    // let rightDiffB = Math.abs(bc+1-(M-2));
    // let downDiffB = Math.abs(br+1-(N-2));
    // let leftDiffB = Math.abs(bc+1-(0+1));

    let fourDirectionResult = [null, null, null, null];
    let loc
    let findAns = false
    let fourMat = [null, null, null, null];

    for (loc=0; loc<4; ++loc) {
        if (loc == pDirection || loc == (pDirection+2) % 4) continue;
        let rPassedHole = false, bPassedHole = false;
        
        fourMat[loc] = deepcopy2D(matrix);    // 공이 같은 라인을 따라 이동할 때, 이동한 후 그 공이 공간을 차지하고 있으니 다음 공이 이동 못함을 반영하려면 새로운 mat이 필요하다. 
                                            // #####################
                                            // #.................RB#
                                            // #####################

                                            // #####################
                                            // #B..................#  (X)
                                            // #####################

                                            // #####################
                                            // #RB.................#  (O)
                                            // #####################

        let nRLoc = null, nBLoc = null;
        
        if (loc == 0) {
            //둘 중에 무엇이 더 up쪽 벽과 가까운지 계산하고 그 가까운 공부터 움직인다
            let firstMove = rr < br ? 'r' : 'b';

            if (!sameCol || (sameCol && firstMove == 'r')) {
                let i, j
                for (i=1; ; ++i) {
                    let newRLoc = fourMat[loc][rr-i][rc]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            fourMat[loc][rr][rc] = '.';
                            break;
                        }
                        nRLoc = [rr-i+1, rc];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr-i+1][rc] = 'R';
                        break;
                    }
                }

                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br-j][bc]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br-j+1, bc];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br-j+1][bc] = 'B';
                        break;
                    }
                }
            } else {
                let i, j
                    
                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br-j][bc]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true
                            break;
                        }
                        nBLoc = [br-j+1, bc];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br-j+1][bc] = 'B';
                        break;
                    }
                }
                
                for (i=1; !bPassedHole; ++i) {
                    let newRLoc = fourMat[loc][rr-i][rc]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true
                            break
                        }
                        nRLoc = [rr-i+1, rc];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr-i+1][rc] = 'R';
                        break;
                    }
                }
            }
        } 
        else if (loc == 2) {
            //둘 중에 무엇이 더 down쪽 벽과 가까운지 계산하고 그 가까운 공부터 움직인다
            let firstMove = rr > br ? 'r' : 'b';

            if (!sameCol || (sameCol && firstMove == 'r')) {
                let i, j

                for (i=1; ; ++i) {
                    let newRLoc = fourMat[loc][rr+i][rc]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            fourMat[loc][rr][rc] = '.';
                            break;
                        }
                        nRLoc = [rr+i-1, rc];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr+i-1][rc] = 'R';
                        break;
                    }
                }

                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br+j][bc]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br+j-1, bc];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br+j-1][bc] = 'B';
                        break;
                    }
                }
            } else {
                let i, j
                    
                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br+j][bc]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br+j-1, bc];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br+j-1][bc] = 'B';
                        break;
                    }
                }
                
                for (i=1;!bPassedHole; ++i) {
                    let newRLoc = fourMat[loc][rr+i][rc]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            break;
                        }
                        nRLoc = [rr+i-1, rc];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr+i-1][rc] = 'R';
                        break;
                    }
                }
            }
        }
        else if (loc == 1) {
            //둘 중에 무엇이 더 down쪽 벽과 가까운지 계산하고 그 가까운 공부터 움직인다
            let firstMove = rc > bc ? 'r' : 'b';

            if (!sameRow || (sameRow && firstMove == 'r')) {
                let i, j

                for (i=1; ; ++i) {
                    let newRLoc = fourMat[loc][rr][rc+i]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            fourMat[loc][rr][rc] = '.';
                            break;
                        }
                        nRLoc = [rr, rc+i-1];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr][rc+i-1] = 'R';
                        break;
                    }
                }

                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br][bc+j]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br, bc+j-1];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br][bc+j-1] = 'B';
                        break;
                    }
                }
            } else {
                let i, j
                    
                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br][bc+j]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br, bc+j-1];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br][bc+j-1] = 'B';
                        break;
                    }
                }
                
                for (i=1;!bPassedHole; ++i) {
                    let newRLoc = fourMat[loc][rr][rc+i]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            break;
                        }
                        nRLoc = [rr, rc+i-1];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr][rc+i-1] = 'R';
                        break;
                    }
                }
            }
        }
        else if (loc == 3) {
            //둘 중에 무엇이 더 down쪽 벽과 가까운지 계산하고 그 가까운 공부터 움직인다
            let firstMove = rc < bc ? 'r' : 'b';

            if (!sameRow || (sameRow && firstMove == 'r')) {
                let i, j

                for (i=1; ; ++i) {
                    let newRLoc = fourMat[loc][rr][rc-i]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            fourMat[loc][rr][rc] = '.';
                            break;
                        }
                        nRLoc = [rr, rc-i+1];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr][rc-i+1] = 'R';
                        break;
                    }
                }

                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br][bc-j]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br, bc-j+1];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br][bc-j+1] = 'B';
                        break;
                    }
                }
            } else {
                let i, j
                    
                for (j=1; ;++j) {
                    let newBLoc = fourMat[loc][br][bc-j]

                    if (newBLoc != '.') {
                        if (newBLoc == 'O') {
                            bPassedHole = true;
                            break;
                        }
                        nBLoc = [br, bc-j+1];
                        fourMat[loc][br][bc] = '.';
                        fourMat[loc][br][bc-j+1] = 'B';
                        break;
                    }
                }
                
                for (i=1;!bPassedHole; ++i) {
                    let newRLoc = fourMat[loc][rr][rc-i]

                    if (newRLoc != '.') {
                        if (newRLoc == 'O') {
                            rPassedHole = true;
                            break;
                        }
                        nRLoc = [rr, rc-i+1];
                        fourMat[loc][rr][rc] = '.';
                        fourMat[loc][rr][rc-i+1] = 'R';
                        break;
                    }
                }
            }
        }   

        if (bPassedHole) {
            fourDirectionResult[loc] = -1
        } else if (rPassedHole) {
            findAns = true
            break;
        } else {
            if (rr == nRLoc[0] && rc == nRLoc[1] && br == nBLoc[0] && bc == nBLoc[1]) {
                fourDirectionResult[loc] = -1;
            } else {
                fourDirectionResult[loc] = findNextLoc(loc, nRLoc, nBLoc, cnt+1, fourMat[loc])
            }
        }

    }

    if (findAns) {
        return cnt+1;
    } else {
        let min = 11;
        for (e of fourDirectionResult) {
            
            if (e > 0 && e < min) {
                min = e;
            }
        }

        if (min < 11) return min;

        return -1;
    }
    
}
// 케이스분류를 해줘야 하는데 같은 행 또는 열에 있을 때에 대해 이동시 


let result = findNextLoc(undefined, initR, initB, 0, input);

console.log(result)