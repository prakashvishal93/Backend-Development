function fun() {
  return new Promise(function f(resolve, reject) {
    setTimeout(function process() {
      console.log('Resolved ');
      resolve(123);
    }, 3000);
  });
}

let x = fun();
x.then(function exec(value) {
  console.log('The value is ', value);
  return 100;
}).then(function exec2(value) {
  console.log('The value is ', value);
  return 300;
});
