const fs = require('fs');

let input = fs.readFileSync(`./test.txt`).toString().trim().split(`\n`);

let [N, M] = input.shift().split(' ').map(e => +e);
let [init_x, init_y, init_d] = input.shift().split(' ').map(e => +e);

input = input.map(str => str.trim().split(` `).map(e => +e));

let count = 0;

function move_cleaner(x, y, d) {
    if (input[x][y] == 0){
        input[x][y] = 2;
        count++;
    }
    
    for (let i=1; i<=4; ++i) {
        let new_dir = (d-i+4) % 4;

        if (new_dir == 0 && input[x-1][y] == 0) {
            move_cleaner(x-1, y, new_dir);
            return;
        }

        if (new_dir == 1 && input[x][y+1] == 0) {
            move_cleaner(x, y+1, new_dir);
            return;
        } 

        if (new_dir == 2 && input[x+1][y] == 0) {
            move_cleaner(x+1, y, new_dir);
            return;
        }

        if (new_dir == 3 && input[x][y-1] == 0) {
            move_cleaner(x, y-1, new_dir);
            return;
        }
    }

    let counter_direction = (d+2) % 4;
    let back_x = x, back_y = y;

    if (counter_direction == 0) {
        back_x--;
    } else if (counter_direction == 1) {
        back_y++;
    } else if (counter_direction == 2) {
        back_x++;
    } else {
        back_y--;
    }

    if (input[back_x][back_y] != 1) {
        move_cleaner(back_x, back_y, d);
    }

    return;
}

move_cleaner(init_x, init_y, init_d);

console.log(count)
