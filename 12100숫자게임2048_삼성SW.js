// 5번 움직여서 가장 큰 숫자를 출력한다. 
// 4^5 = 1024번의 결과에 대해 비교하는 것은 너무 많다. 
// 이동을 시켜도 아무런 변화가 없으면 해당 움직임에서 종료시킨다
// 움직였을 때 블록이 합쳐지는 것 구현하기

let fs = require('fs')
let input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(str => str.trim())

let N = +input.shift()
input = input.map(str => str.split(' ').map(chr => +chr))

console.log(N, input)

/**
 * 
 * @param {arr} mat 
 * @param {int} cnt 
 */
const findNextMat = (mat, cnt) => {

    if (cnt == 5) {
        let max = 0
        for (let e of mat) {
            if (e > max) max = e
        }
        return max
    }
    let max 
    let loc //4가지 방향을 위해 사용하는 변수
    let nMat = [null, null, null, null]
    let fourDirectionResult = [null, null, null, null]

    for (loc=0; loc<4; ++loc) {
        
        if (loc==0) 
        {
            let pArr
            nMat[loc] = [...Array(N)].map(_ => [...Array(N)].fill(null))
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
                nMatCnt = 0

                for (let i=1; i<pLen; ++i) {
                    let pE = pArr[i]
    
                    if (pArr[i-1] == pE) {
                        ++i
                        nMat[loc][nMatCnt][col] = pE*2
                    } else {
                        nMat[loc][nMatCnt][col] = pE

                    }
                    ++nMatCnt
                }
            }
            
        }
        else if (loc == 2)
        {
            let pArr
            nMat[loc] = [...Array(N)].map(_ => [...Array(N)].fill(null))
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

                for (let i=pLen-2; i>=0; --i) {
                    let pE = pArr[i]
    
                    if (pArr[i+1] == pE) {
                        --i
                        nMat[loc][nMatCnt][col] = pE*2
                    } else {
                        nMat[loc][nMatCnt][col] = pE

                    }
                    --nMatCnt
                }
            }
        }
        else if (loc == 1)
        {
            let pArr 
            nMat[loc] = [...Array(N)].map(_ => [...Array(N)].fill(null))
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

                for (let i=pLen-2; i>=0; --i) {
                    let pE = pArr[i]
    
                    if (pArr[i+1] == pE) {
                        --i
                        nMat[loc][row][nMatCnt] = pE*2
                    } else {
                        nMat[loc][row][nMatCnt] = pE

                    }
                    --nMatCnt
                }
            }
        }
        else 
        {
            let pArr
            nMat[loc] = [...Array(N)].map(_ => [...Array(N)].fill(null))
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

                for (let i=1; i<pLen; ++i) {
                    let pE = pArr[i]
    
                    if (pArr[i-1] == pE) {
                        ++i
                        nMat[loc][row][nMatCnt] = pE*2
                    } else {
                        nMat[loc][row][nMatCnt] = pE

                    }
                    ++nMatCnt
                }
            }
        }

        if (JSON.stringify(nMat[loc]) != JSON.stringify(mat)) {
            fourDirectionResult[loc] = findNextMat(nMat[loc], cnt+1)
        }
    }

    for (let e of fourDirectionResult) {
        max = 0
        if (e > max) max = e
    }

    return max
}

let result = findNextMat(input, 0)
console.log(result)