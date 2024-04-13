const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');
let machine = [];

machine.push(input.shift().trim().split('').map(e => +e))
machine.push(input.shift().trim().split('').map(e => +e))
machine.push(input.shift().trim().split('').map(e => +e))
machine.push(input.shift().trim().split('').map(e => +e))

const N = +input.shift();

input = input.map(str => str.split(' ').map(e => +e));

for (let i=0; i<N; ++i) {
    let moving_machine_idx = input[i][0]-1;

    let select_moving_machine = [0, 0, 0, 0];
    let dir = input[i][1];

    select_moving_machine[moving_machine_idx] = dir;

    select_moving_machine = turn_on_moving(select_moving_machine, moving_machine_idx, dir);

    move_machine(select_moving_machine);

}

let sum = 1*machine[0][0] + 2*machine[1][0] + 4*machine[2][0] + 8*machine[3][0];
console.log(sum);

function turn_on_moving(select_moving_machine, idx, dir) {
    if (idx == 0) {
        if (machine[0][2] != machine[1][6]) {
            select_moving_machine[1] = -1*dir;
            if (machine[1][2] != machine[2][6]) {
                select_moving_machine[2] = dir;
                if (machine[2][2] != machine[3][6]) {
                    select_moving_machine[3] = -1*dir;
                }
            }
        }
    } else if (idx == 1) {
        if (machine[0][2] != machine[1][6]) {
            select_moving_machine[0] = -1*dir;
        }

        if (machine[2][6] != machine[1][2]) {
            select_moving_machine[2] = -1*dir;

            if (machine[2][2] != machine[3][6]) {
                select_moving_machine[3] = dir;
            }
        }

    } else if (idx == 2) {
        if (machine[1][2] != machine[2][6]) {
            select_moving_machine[1] = -1*dir;
            if (machine[1][6] != machine[0][2]) {
                select_moving_machine[0] = dir;
            }
        }

        if (machine[3][6] != machine[2][2]) {
            select_moving_machine[3] = -1*dir;
        }
    } else {
        if (machine[2][2] != machine[3][6]) {
            select_moving_machine[2] = -1*dir;
            if (machine[2][6] != machine[1][2]) {
                select_moving_machine[1] = dir;
                if (machine[1][6] != machine[0][2]) {
                    select_moving_machine[0] = -dir;
                }
            }
        }
    }

    return select_moving_machine;
}


function move_machine(moving_machine) {
    let length = moving_machine.length;

    for (let i=0; i<length; ++i) {
        let temp = [...machine[i]];

        if (moving_machine[i] == 1) {
            for (let j=0; j<8; ++j) {
                machine[i][(j+1) % 8] = temp[j];
            }
        } else if (moving_machine[i] == -1) {
            for (let j=0; j<8; ++j) {
                machine[i][(j+7) % 8] = temp[j];
            }
        }
    }
}