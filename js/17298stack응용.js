const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim().split("\n");

const num = +input.shift();
input = input[0].split(" ").map(chr => +chr);

// console.log(num, input)

//인터넷 답을 참고해서 왜 stack이 쓰이는지 확인했다. 
//stack은 난 이 도시를 제패하는 파이터. 매일같이 다른 파이터와 겨루어 패권을 확장한다. 근데 일단 나보다 덩치큰 녀석들은 나중에 이길거니까 리스트에 올리고 
//잔챙이는 죽이는데 이때 다시 힘을 길러서 덩치를 키웠을 땐 리스트에 적힌 놈들 중 만만한 놈과 겨루어 승리하고 리스트에서 제외시킨다.
//이러한 원리로 오큰수문제가 해결된다. 
let stack = [];

for (let i=0; i<num; ++i) {
    let temp = input[i];

    while (stack.length > 0 && input[stack[stack.length-1]] < temp) {
        input[stack.pop()] = temp;
    }
    stack.push(i);
}

let stackLen = stack.length;

for (let i=0; i<stackLen; ++i) {
    input[stack.pop()] = -1;
}

console.log(input.join(" "));
