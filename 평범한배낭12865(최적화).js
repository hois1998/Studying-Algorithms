const fs = require('fs');

let input = fs.readFileSync('test.txt').toString().trim().split('\n');
input = input.map(i => i.split(' ').map(char => parseInt(char)));

let [max_num, max_wight] = input.shift();

//여기서 이제 전탐색 알고리즘 짜기
let num_of_object = input.length;
let pick_case = [];
let num_to_pick = 1 //1로 초기화하고 이후 선택하는 물건 수를 1씩 증가시키다가 max_num을 넘어가면 루프를 빠져나온다.

while(1) {

}

function nCr_case_list(n, r) {
  //n은 전체 데이터 수로 여기서는 num_of_object에 해당
  //r은 물건 중 몇 개를 뽑을지 결정

  let list = [];
  let element = [];
  for (let i=0; i<r; ++i) {
    element.push(i);
  }

  list.push(element);

  //n-r만큼 전체적으로 element[0]의 값이 업데이트 된다.
  for (let i=0; i<n-r; ++i) {
    let temp = list[list.length-1];
    let last_of_ele = temp[temp.length-1];

    for (let j = 0; j < num_of_object - (last_of_ele + 1); ++j) {

    }

  }


}
