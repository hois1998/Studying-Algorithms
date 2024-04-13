//처음에 시간초과 나왔다. 
//
const fs = require('fs')
let [min, max] = fs.readFileSync('./test.txt').toString().trim().split(' ').map(chr => +chr)

let primeMax = Math.floor(max**(0.5))
let primeArr = [...Array(primeMax+1)].map((_, idx) => idx**2)

primeArr.shift()
primeArr.shift()

let len = primeArr.length

for (let i=0; i<len; ++i) 
{
    if (primeArr[i] == 0) continue
    
    let tempNum = primeArr[i]

    for (let j=i+1; j<len; ++j)
    {
        if (primeArr[j] % tempNum == 0)
        {
            primeArr[j] = 0
        }
    }
}

primeArr = primeArr.filter(e => e != 0)
len = primeArr.length

let inputArr = [...Array(max-min+1)].map((_, idx) => idx+min)
let inputLen = inputArr.length

for (let i=0; i<len; ++i) 
{
    let foundTrig = false
    let temp = primeArr[i]
    let inputTemp 
    let tempIdx 
    for (let j=0; j<inputLen; ++j)
    {
        if (inputArr[j] == 0) continue

        if (inputArr[j] % temp == 0)
        {
            inputTemp = inputArr[j]
            inputArr[j] = 0
            tempIdx = j
            foundTrig = true
            break
        }
    }

    if (foundTrig)
    {
        let k = 1

        while (inputTemp+temp*k <= max)
        {
            inputArr[tempIdx+temp*k] = 0
            k++
        }
    }
}

let cnt = 0
inputArr.forEach(e => {
    if (e != 0) cnt++
})

console.log(cnt)