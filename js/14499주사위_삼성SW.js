/**
 * 스스로 피드백 하기 
 * 소요된 시간 :약 2시간, 디버깅이랑 처음 아이디어 생각하는 데에 시간이 많이 소요
 * 아이디어: 주사위를 vertical과 horizontal로 나눠해결했다. 각 방향으로 이동할 때마다 주사위 숫자를 업데이트/ 그리고 더 효과적으로 풀 수 있는 방법 고민하닥 시간이 많이 흘렀다.
 * 주의점: recursive function을 활용하는데 체계가 없어보인다. count 체크를 어떤 시점에 할지 이번에 입력초반에 했던 이유는 recursive가 함수 내에서 이뤄지는 부분이 여러 곳이기 때문에 각각에 if문을 넣기 보다는 새롭게 시작되는 다음 카운트의 함수에서 들어가자마자 처음 카운트체크를 하는 편이 개발입장에서 편했다. 컴퓨터 로드는 동일하겠지만,
 * 
 * 디버깅에 대한 체계가 없다. 파이썬으로 옮기고 파이썬에서 어떻게 디버깅해야 하는지 배워야 겠다. 
 * 
 * 어디에 break point할지 미리 생각해야 겠다. 
 */

const fs = require('fs');

input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const [N, M, x, y, cnt] = input.shift().trim().split(' ').map(e => +e);

let glb_direction = input.pop().trim().split(' ').map(e => +e);

input = input.map(str => str.split(' ').map(e => +e));

let dice_h = [0, 0, 0, 0];
let dice_v = [0, 0, 0, 0];
let result = ``;

function moveDice(x, y, direction, dice_v, dice_h, count) {
    if (count == cnt) {
        return;
    }

    if (direction == 1 || direction == 2) {
        let n_x = x, n_y;

        if (direction == 1) {
            n_y = y+1;
        } else {
            n_y = y-1;
        }
        
        if (n_y == M || n_y == -1) {
            // 그냥 무시하고 count랑 다음 방향으로 moveDice한다
            moveDice(x, y, glb_direction[count+1], dice_v, dice_h, count+1);
        } else {
            //dice_h, dice_v를 각각 업뎃
            // 만약 새로 옮겨진 바닥이 0이거나 0아닌 경우로 케이스분류
            // 윗 주사위면 숫자 결과에 반영
            // 다음 moveDice로 이동
            let temp = [...dice_h];

            for(let i=0; i<4; ++i) {
                if (direction == 1) {
                    dice_h[i] = temp[(i+1) % 4];
                } else {
                    dice_h[i] = temp[(i+3) % 4];
                }
            }

            //바닥의 숫작 확인해서 케이스분류
            if (input[n_x][n_y] == 0) {
                input[n_x][n_y] = dice_h[0];
            } else {
                dice_h[0] = input[n_x][n_y];
                input[n_x][n_y] = 0;
            }
            
            dice_v[2] = dice_h[2];
            dice_v[0] = dice_h[0];

            result += `${dice_h[2]}\n`;

            moveDice(n_x, n_y, glb_direction[count+1], dice_v, dice_h, count+1);
        }
    }
    else if (direction == 3 || direction == 4) {
        let n_x, n_y = y;

        if (direction == 3) {
            n_x = x-1;
        } else {
            n_x = x+1;
        }
        
        if (n_x == N || n_x == -1) {
            // 그냥 무시하고 count랑 다음 방향으로 moveDice한다
            moveDice(x, y, glb_direction[count+1], dice_v, dice_h, count+1);
        } else {
            //dice_h, dice_v를 각각 업뎃
            // 만약 새로 옮겨진 바닥이 0이거나 0아닌 경우로 케이스분류
            // 윗 주사위면 숫자 결과에 반영
            // 다음 moveDice로 이동
            let temp = [...dice_v];

            for(let i=0; i<4; ++i) {
                if (direction == 3) {
                    dice_v[i] = temp[(i+3) % 4];
                } else {
                    dice_v[i] = temp[(i+1) % 4];
                }
            }

            //바닥의 숫작 확인해서 케이스분류
            if (input[n_x][n_y] == 0) {
                input[n_x][n_y] = dice_v[0];
            } else {
                dice_v[0] = input[n_x][n_y];
                input[n_x][n_y] = 0;
            }

            dice_h[2] = dice_v[2];
            dice_h[0] = dice_v[0];

            result += `${dice_v[2]}\n`;

            moveDice(n_x, n_y, glb_direction[count+1], dice_v, dice_h, count+1);
        }
    } else {
        console.log('direction 구분 불가');
    }
}
// console.log(glb_direction)
moveDice(x, y, glb_direction[0], dice_v, dice_h, 0);
console.log(result);