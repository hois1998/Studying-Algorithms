const fs = require('fs')
let input = fs.readFileSync('./test.txt').toString().trim().split('\n')

let N = +input.shift()
let appleNum = +input.shift()
let apple = []

for (let i=0; i<appleNum; ++i) 
{
    apple.push(input.shift().split(' ').map(chr => +chr-1))
}

let directionNum = +input.shift()
let directionChangeTime = []
let direction = input.map(str => str.split(' ').map((e, idx) => {
    if (idx == 0) {
        directionChangeTime.push(+e)
        
        return +e
    }
    
    return e.trim()
}))

// console.log(N, appleNum, apple, directionNum, direction)

//뱀은 벽이나 자신의 몸에 닿을 때 죽는다
//사과를 먹으면 꼬리가 늘어난다
let snake = [[0,0]]
let direct = 'r'
let time 
let toBeChanged = false

for (time=0;;++time) 
{
    //direct정하는 과정 필요

        //direction 바꾸는 시간에 해당이 되면 작동시키는 함수
    let idx = directionChangeTime.indexOf(time)
    let [hr, hc] = snake[0]
    let nextHeadCoord 
    let ateApple = false
    let touchBody = false

    if (idx != -1) 
    {
        let leftRight = direction[idx][1]

        if (leftRight == 'L')
        {
            if (direct == 'r') 
            {
                direct = 'd'
            }
            else if (direct == 'l')
            {
                direct = 'u'
            }
            else if (direct == 'u')
            {
                direct = 'r'
            }
            else 
            {
                direct = 'l'
            }
        }
        else 
        {
            if (direct == 'r') 
            {
                direct = 'u'
            }
            else if (direct == 'l')
            {
                direct = 'd'
            }
            else if (direct == 'u')
            {
                direct = 'l'
            }
            else 
            {
                direct = 'r'
            }
        }

    }

    // 해당 칸으로 이동하는 방식을 정한다 eg) r이면 머리 좌표의 열만 +1시키고, 해당 칸에 direciton이 있으면 nextDirecitonChange 트루
    

    //direct에 따른 헤드 바꾸기
    if (direct == 'r')
    { 
        nextHeadCoord = [hr, hc+1]
    }
    else if (direct == 'l')
    {
        nextHeadCoord = [hr, hc-1]
    }
    else if (direct == 'u')
    {
        nextHeadCoord = [hr+1, hc]
    }
    else 
    {
        nextHeadCoord = [hr-1, hc]
    }

    //헤드가 자신의 몸과 닿았거나 벽에 닿았는지 확인
    let nhr = nextHeadCoord[0], nhc = nextHeadCoord[1]

        //벽과 닿는지 확인
    if (nhr >= N || nhr < 0 || nhc >= N || nhc < 0)
    {
        time++
        break;
    }

        //사과먹었는지 확인    
    for (let i=0; i<appleNum; ++i)
    {
        if (apple[i][0] == nhr  &&  apple[i][1] == nhc) {
            apple = apple.filter((_, idx) => idx != i)
            appleNum = apple.length
            ateApple = true
            break
        } 
    }


    //자신의 몸과 닿는지 확인
    let len = snake.length
    for (let i=0; i<len; ++i)
    {
        if (snake[i][0] == nhr && snake[i][1] == nhc) 
        {
            time++
            touchBody = true
            break
        }
    }
    
    if (!ateApple)
    {
        snake.pop()
    }

    if (touchBody) break

    snake.unshift(nextHeadCoord)


    //뱀이 잘 움직이는지 확인
    // let drawing = ''
    // for(let i=0; i<N; ++i) 
    // {
    //     for (let j=0; j<N; ++j) 
    //     {
    //         let blk = false
    //         let ap = false

    //         for (let k=0; k<len+1; ++k)
    //         {
    //             if (JSON.stringify(snake[k])== JSON.stringify([i,j])) 
    //             {
    //                 blk = true
    //                 break
    //             }
    //         }

    //         for (let l=0; l<appleNum; ++l) 
    //         {
    //             if (JSON.stringify(apple[l]) == JSON.stringify([i,j]))
    //             {
    //                 ap = true
    //                 break
    //             }
    //         }

    //         if (blk)
    //         {
    //             drawing += '@'
    //         }
    //         else 
    //         {
    //             if (ap) 
    //             {
    //                 drawing += 'A'
    //             }
    //             else drawing += '#'
    //         }
    //     }

    //     drawing += '\n'
    // }

    // console.log(drawing)
}

console.log(time)
