function fun() {
  // Function Definition
  console.log("fun called");
}

function gun(fn) {
  // Funciton Definition
  console.log("inside gun");

  fn();
  console.log("leaving gun");
  console.trace();
}

gun(function () {
  // Function Expression
  console.log("new function passed.");
});
