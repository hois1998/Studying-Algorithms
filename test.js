//오브젝트 타입처럼 죄변이 우변의 값을 받을 때 property name으로 받을 수 있는지

//오브젝트 형식
let obj = {a: 1, b: 'game', c: [1,2,3]};
let {a, b, c} = obj; //단 이같은 형식은 프로퍼티의 이름을 그대로 가져와야 한다는 조건이 필요
console.log(`${a}\n${b}\n${c}`);

//배열도 생각해보니 오브젝트 타입이다
let arr = [1,2,3, 4];
let [aa, bb, cc] = arr; //출력 잘 먹는다

//shift, unshift, pop, push
let a2 = [1,2,3,4];
a2.push(5);
console.log(a2);
let b2 = a2.shift(0);
console.log(b2);
//shft, pop은 각각 빠짐을 의미

//map을 이용한 2차원 어래이
let arr0 = new Array(3).fill(1).map(i => new Array(3).fill(0));
let arr1 = new Array(3).fill(new Array(3).fill(0));
console.log(arr0);
console.log(arr1);
arr0[0][0] = 1;
arr1[0][1] = 1;
console.log(arr0);
console.log(arr1);


//배열에서 -1인덱스는?
let temp00 = [1,2,3,4,5];
console.log(temp00[-2]);  //undefined
