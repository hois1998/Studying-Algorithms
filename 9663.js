let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim();

input = parseInt(input);

let arr = [...Array(input)].map(e => [1, 0]);
let cnt = 0;

// 초기 배열 화인
console.log(arr);

function checkPromising(tempArr, nRow) {
	// let tempArr = [...tempArrOrig];
	let newTempArr = [...Array(input)].map(e => 1);
	
	//먼저 아규먼트로 받은 tempArr이 정말 제대로 왔는지 체크 하고
	//처음 for 루프를 돌고서 만들어진 newTempArr가 제대로 만들어졌나
	console.log(`\n\nnew start ${nRow}\n`);
	
	for (let i=0; i<input; ++i) {
		if ((newTempArr[i] ==1) && (tempArr[i][0] == 0)) {
			newTempArr[i] = 0;
		}
			
		if (tempArr[i][1]!=0) {
			if ((i + tempArr[i][1]) < input) {
				//console.log('pass', i+tempArr[i][1]);
				newTempArr[i+tempArr[i][1]] = 0;	
			}
			
			if ((i - tempArr[i][1]) >= 0) {
				newTempArr[i-tempArr[i][1]] = 0;
			}
		}
		
	}
	
	console.log(`입력받은 배열 `, tempArr, `\n  new배열 `, newTempArr);

	// let tempArr0 = [...tempArr];
	for (let i=0; i<input; ++i) {
		if(newTempArr[i] == 1) {
			console.log('새 루프를 돕니다')

			if (nRow == input-1) {
				cnt++;
				console.log(`cnt ${cnt}`);
			} else {	
				let nextTempArr = [...tempArr];
				
				nextTempArr[i][0] = 0;
				
				console.log('i번째: ', i,  nRow , i, newTempArr, nextTempArr, `newTempArr ${newTempArr} i ${i}`);
				//각 원소의 대각선 적용값을 업데이트 해주기
				for (let i=0; i< input; ++i) {
					if (nextTempArr[i][0]  == 0) {
						nextTempArr[i][1]++;
					}	
				}
				
				console.log(`nRow ${nRow} nextTempArr`, nextTempArr);
				checkPromising(nextTempArr, nRow+1);
				console.log('\n=빠져나왔습니다.')
			}
			
		}
	}
}

checkPromising(arr, 1)
// const fs = require('fs');

// let input = '4'
// input = Number(input);

// let ans = 0;

// function sol(input) {
//     const visited = [...Array(input)].map(e => 0);
//     let answer= 0;
    
//     dfs(0, visited);
// }

// function dfs(x, visited) {
//     if (x == input) {
//         ans++;
//     } else {
//         for (let i=0; i<input; ++i) {
//             if (visited[x]) continue;    //왜 필요한지 모르겠다.
//             visited[x] = i;
//             let temp = 1;
            
//             for (let j=0; j<x; ++j) {
//                 if ((visited[x] == visited[i]) || (Math.abs(visited[x]-visited[i]) == x-i)) {
//                     temp = 0;
//                     break;
//                 }
//             }
            
//             if (temp) {
//                 dfs(x+1)
//             }
//         }
//     }
// }

// console.log(sol(input))
 

 