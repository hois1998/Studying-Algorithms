//내 코드와 최단 시간 코드 차이는 왜 발생할까? 
//이를 이해하기 위해선 최단시간 코드를 이해해야 한다.

//내 코드
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = parseInt(input);

let result = "";

let i = 2;
while (input !== 1) {
    while (input % i === 0) {
        input /= i;
        result += i + "\n";
    }
    i++;
}

console.log(result);


//최단시간 코드
const fs = require('fs');
const stdin = (
	process.platform === 'linux'
		? fs.readFileSync('/dev/stdin').toString().trim()
		: `9991`
)
	.trim()
	.split('\n');

const input = (() => {
	let line = 0;
	return () => stdin[line++];
})();

let tn = +input();

for (let i = 2; i <= Math.sqrt(tn); i++) {
	while (tn % i == 0) {
		console.log(i);
		tn /= i;
	}
}

if (tn != 1) {
	console.log(tn);
}
