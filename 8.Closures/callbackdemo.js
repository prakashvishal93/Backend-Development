function fun(x, fn) {
  /*
         x - is a number 
         fn - is a callback function 
        */

  //some logic
  for (let i = 0; i <= x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, function log() {
  console.log("Custom Logger");
});
