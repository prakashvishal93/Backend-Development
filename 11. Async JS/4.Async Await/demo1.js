console.log('Start of the file');

setTimeout(function timer1() {
  console.log('Timer 1 done');
}, 0);

for (let index = 0; index < 10000000000; index++) {
  ///some type of task
}
let x = Promise.resolve("Sanket's Promise");
x.then(function proceesPromise(value) {
  console.log('Whose Promise', value);
});

setTimeout(function timer2() {
  console.log('Timer 2 done');
}, 0);

console.log('End of the file');
