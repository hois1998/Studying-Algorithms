const fs = require('fs')
let input = fs.readFileSync('./test.txt').toString().trim().split('\n')
let classNum = +input.shift()
let eachClass = input.shift().split(' ').map(e => +e)
let [mainS, subS] = input[0].split(' ').map(e => +e)

// console.log(classNum, eachClass, mainS, subS)

let cnt = 0
let isMainLarger = mainS > subS ? true : false

for (let i=0; i<classNum; ++i) 
{
    let num = eachClass[i]
    num -= mainS
    cnt++

    if (num < 0) num = 0

    let tempCnt = Math.ceil(num / subS)
    cnt += tempCnt

    // console.log(`main ${1} sub ${tempCnt} accumulated ${cnt}`)
}

console.log(cnt)