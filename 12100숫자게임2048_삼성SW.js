// 5번 움직여서 가장 큰 숫자를 출력한다. 
// 4^5 = 1024번의 결과에 대해 비교하는 것은 너무 많다. 
// 이동을 시켜도 아무런 변화가 없으면 해당 움직임에서 종료시킨다
// 움직였을 때 블록이 합쳐지는 것 구현하기

let fs = require('fs')
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(str => str.trim())

let N = +input.shift()
input = input.map(str => str.split(' ').map(chr => +chr))

// console.log(N, JSON.stringify(input))

/**
 * 
 * @param {arr} mat 
 * @param {int} cnt 
 */
const findNextMat = (mat, cnt) => {

    if (cnt == 5) {
        let max = 0
        for (let row of mat) {
            for (let e of row) {
                if (e > max) max = e
            }
        }

        return max
    }

    let max //fourdirection의 최대값들을 모은 상태에서 그것들 중 무엇이 젤 큰지 찾을 때 사용하는 변수
    let nMat = [null, null, null, null]
    let fourDirectionResult = [0, 0, 0, 0]

    for (let loc=0; loc<4; ++loc) { //loc은 4가지 방향의 움직임을 나타냈
        // let isChanged = false //합쳐지는 것 유무로 true로 바꾸고 해당 방향으로 cnt를 올리는 식으로 진행 //근데 생각해보니까 합쳐지는 것이 없어도 다음 이동에서 합쳐질수도 있으니까
        let nMat = [...Array(N)].map(_ => [...Array(N)].fill(0))

        if (loc==0) 
        {
            let pArr
            let pLen
            let nMatCnt 

            for (let col=0; col<N; ++col) {
                pArr = []

                for (let row=0; row<N; ++row) {
                    let e = mat[row][col]
                    if (e) {
                        pArr.push(e)    //어차피 여기서 pArr엔 0이 안들어가
                    }
                }
                
                pLen = pArr.length
                nMatCnt = 0

                for (let i=0; i<pLen; ++i) {
                    let pE = pArr[i]
    
                    if (i < pLen-1 && pArr[i+1] == pE) {   //+를 붙인 이유는 null이면 +null => 0이고 0 != null이기 때문 //이것을 생각할 필요가 없었어 왜냐면 pArr엔 null이나 0이 안들어가기 때문에
                        // isChanged = true
                        ++i
                        nMat[nMatCnt][col] = pE*2
                    } else {
                        nMat[nMatCnt][col] = pE

                    }
                    ++nMatCnt
                }
            }
            
        }
        else if (loc == 2)  //아래로 이동
        {
            let pArr
            let pLen
            let nMatCnt 

            for (let col=0; col<N; ++col) {
                pArr = []

                for (let row=0; row<N; ++row) {
                    let e = mat[row][col]
                    if (e) {
                        pArr.push(e)
                    }
                }
                
                pLen = pArr.length
                nMatCnt = N-1

                for (let i=pLen-1; i>=0; --i) {
                    let pE = pArr[i]
    
                    if (i > 0 && pArr[i-1] == pE) {
                        // isChanged = true
                        --i
                        nMat[nMatCnt][col] = pE*2
                    } else {
                        nMat[nMatCnt][col] = pE

                    }
                    --nMatCnt
                }
            }
        }
        else if (loc == 1)  //오른쪽
        {
            let pArr 
            let pLen
            let nMatCnt 

            for (let row=0; row<N; ++row) {
                pArr = []

                for (let col=0; col<N; ++col) {
                    let e = mat[row][col]
                    if (e) {
                        pArr.push(e)
                    }
                }
                
                pLen = pArr.length
                nMatCnt = N-1

                for (let i=pLen-1; i>=0; --i) {
                    let pE = pArr[i]
    
                    if (i > 0 && pArr[i-1] == pE) {
                        // isChanged = true
                        --i
                        nMat[row][nMatCnt] = pE*2
                    } else {
                        nMat[row][nMatCnt] = pE

                    }
                    --nMatCnt
                }
            }
        }
        else 
        {
            let pArr
            let pLen
            let nMatCnt 

            for (let row=0; row<N; ++row) {
                pArr = []

                for (let col=0; col<N; ++col) {
                    let e = mat[row][col]
                    if (e) {
                        pArr.push(e)
                    }
                }
                
                pLen = pArr.length
                nMatCnt = 0

                for (let i=0; i<pLen; ++i) {
                    let pE = pArr[i]
    
                    if (i < pLen-1 && pArr[i+1] == pE) {
                        // isChanged = true
                        ++i
                        nMat[row][nMatCnt] = pE*2
                    } else {
                        nMat[row][nMatCnt] = pE

                    }
                    ++nMatCnt
                }
            }
        }

        if (JSON.stringify(nMat) != JSON.stringify(mat)) {
            fourDirectionResult[loc] = findNextMat(nMat, cnt+1)
        }
    }

    max = 0
    //각 방향에서 제일 큰 수를 뽑아오는 것인데 뽑아오면 그 상위 fourDirectionResult에 전달한다
    for (let e of fourDirectionResult) {
        if (e > max) max = e
    }

    return max
}

let result = findNextMat(input, 0)
console.log(result)