//Promise의 역할
//어떤 일이 실행이 되서 완료되면 그 리턴값을 바탕으로 다음 일을 시행할 수 있는 역할을 한다

async function addAfter5sec(...a) {
  //5초보다 연산은 빨리 이뤄진다. 거의 확신
  //그러면 5초를 기다리고 연산 시작할 수도 있으나
  let start = new Date().getTime();
  let sum = 0;

  for (let i of a) {
    sum += i;
  }
  //res가 바로 전 스코프에 존재해야 한다
  await new Promise((res, rej) => {
    //rej(0);
    while(true) {
      if ((new Date().getTime() - start) >= 2000) {
        res(1);
        break;
      }
    }
  })
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log('err');
    return err;}
  );

  console.log(sum);
  return sum;
}

async function a() {
  let aa = await new Promise((res, rej) => {
    res(5);
    rej(1);
  })
  .catch(err => 2);
  console.log(aa);
};

let arr = [1,2,3,4,5,6,7,8,9,10];

addAfter5sec(...arr)
  .then(val => {
    console.log('my val is', val);
  });
