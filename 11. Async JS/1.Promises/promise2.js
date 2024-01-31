function demo1() {
  return new Promise(function (resolve, reject) {
    console.log('Hiii');
    setTimeout(function process() {
      console.log('Wooohhhoo, Task Done');

      resolve('Student are the best ');
    }, 10000);
    console.log('Byeee byeeee');
  });
}

function demo2(val) {
  return new Promise(function (resolve, reject) {
    console.log('Start');

    setTimeout(function process() {
      console.log('Completed Timer');

      if (val % 2 == 0) {
        resolve('Even');
      } else {
        reject('Odd');
      }
    }, 7000);
    console.log('Task Completed');
  });
}
