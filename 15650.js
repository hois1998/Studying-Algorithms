const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split(' ');
const [maxVal, count]= input.map(e => Number(e));

let result = '';
let output = [];
//수열이라 함은 수의 나열이다. 즉, 등차수열만을 의미하는 것이 아닌데 난 등차수열로 고정화했다.

function backTracking(idx, cnt) {
	if (cnt == count) {
		//console.log(output);
		result += `${output.join(' ')}\n`; 
		//먼저 배열의 원소로 만들어 놓고 나중에 합치는 아이디어
		// console.log(result);
	} else {
		for (let i = 1; i <= maxVal; ++i) {
			// console.log(i);
			output.push(i);
			backTracking(i, cnt+1);
			output.pop();
			// console.log(output);
		}
	}
}

backTracking(1,0)
console.log(result);

