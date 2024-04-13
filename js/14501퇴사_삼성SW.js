const fs = require('fs');

let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

let N = +input.shift();
let max = 0;

input = input.map(str => str.split(' ').map(chr => +chr));

for (let i=0; i<N; ++i) {
    make_max_money(i, input[i], 0);
}

function make_max_money(day, arr, sum) {
    const duration = arr[0];
    const fee = arr[1];
    let next_day = day+duration;
    
    if (next_day >= N) {
        if (next_day == N) {
            sum += fee;
        }
        
        if (sum > max) {
            max = sum;
        }
        return ;
    }

    sum += fee;
    
    for (let i=next_day; i<N; ++i) {
        make_max_money(i, input[i], sum) 
    }
}

console.log(max)