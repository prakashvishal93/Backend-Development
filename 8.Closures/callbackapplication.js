let arr = [70, 33, 6, 88, 47, 2, 75, 62, 96, 12, 14];

let x = arr.map(function process(v, i) {
  // v --> value
  // i --> index
  console.log(v, i);
  return v * i;
});

console.log(x);
console.log(arr);
