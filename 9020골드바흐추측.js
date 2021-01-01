//골드바흐의 추측은 2보다 큰 짝수는 항상 두 소수의 합으로 표현가능하다
//제한된 짝수가 10000 = 100 * 100이다
//먼저 에라토스테네스 채를 이용해 배열의 인덱스를 소수로 삼아 0이면 소수 1이면 비소수와 같이 소수를 판별할 수 있는 변수를 만든다
//이를 이용해 500이면 250부터 시작해서 250 + 250, 249 + 251, 248+252와 같이 중심에서 멀어지면서 만약 두 수가 모두 소수로 판단되면 그것을 출력하는 식으로 진행

const fs = require('fs');
let input = fs.readFileSync('./test.txt', 'utf-8').toString().split('\r\n');

let arr = new Array(10000).fill(1); //각 인덱스가 소수인지 판단여부를 담는 변수
let initPrime = 2;  //소수 판단은 100보다 작은 소수로만 진행하면 된다. 10000 = 100 * 100이라 101이 소수여도 101 * 103은 소수라도 10000을 넘어간다

//소수인지 판단하는 알고리즘
while (initPrime < 100) {
  // console.log(initPrime);
  let temp = initPrime;
  while (initPrime*temp <= 10000) {
    arr[initPrime*temp] = 0;
    temp++;
  }

  for (let i=initPrime+1;;i++) {
    if (arr[i] == 1) {
      initPrime = i;
      break;
    }
  }
}

input.pop()
let cnt = parseInt(input.shift());
input = input.map(i => parseInt(i));

for (let i=0; i<cnt; i++) {
  let x1 = input[i] / 2, x2 = input[i] / 2;
  while (true) {
    if (arr[x1] == 1 && arr[x2] == 1) {
      console.log(`${x1} ${x2}`);
      break;
    }
    else {
      x1--;
      x2++;
    }
  }
}
