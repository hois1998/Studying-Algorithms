const fs = require('fs')
let [N, r, c] = fs.readFileSync('./test.txt').toString().trim().split(' ').map(chr => +chr)
let cnt = 0

/**
 * 
 * @param {int} N 
 * @param {int} r 
 * @param {int} c 
 */
const calc = (N, r, c) => 
{
    if (N == 0) 
    {
        return
    }

    let size = 2**N
    let halfSize = size/2
    let quadrant = 0

    if (r >= halfSize)
    {
        quadrant += 2
    }

    if (c >= halfSize)
    {
        quadrant += 1
    }

    //사분면 어디인지에 따라 다음 좌표랑 cnt증가랑이 달라진다
    if (quadrant == 3)
    {
        cnt += (halfSize**2) * 3
        calc(N-1, r-halfSize, c-halfSize)
    }
    else if (quadrant == 2)
    {
        cnt += (halfSize**2) * 2
        calc(N-1, r-halfSize, c)
    }
    else if (quadrant == 1)
    {
        cnt += halfSize**2
        calc(N-1, r, c-halfSize)
    }
    else 
    {
        calc(N-1, r, c)
    }

}

calc(N, r, c)

console.log(cnt)