const fs = require('fs')
let [N, k] = fs.readFileSync('./test.txt').toString().trim().split(' ').map(chr => +chr)
let superscript
let temp = N
let remainder
let multiple

for (let i=0; i<k; ++i)
{ 
    superscript = 0
    while(1)
    {
        multiple = 2**superscript
        if (temp <= multiple) {
            remainder = temp - multiple/2
            superscript--
            break
        }

        superscript++
    }
    
    if (remainder==0)
    {
        console.log(0)
        break
    }
    else 
    {
        if (i == k-1)
        {
            console.log(multiple-temp)
            break
        }

        temp = remainder
    }
}