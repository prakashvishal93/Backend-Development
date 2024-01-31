let a = {"english" : 90, "maths" : 100};
console.log(a);
console.log(a.toString());
console.log(a.valueOf());

let b = [1 ,2 ,3];
console.log(b);
console.log(b.toString());
console.log(b.valueOf());

console.log("vishal"+ {"a" : 10});
console.log(10 + {"a" : 10});

let x = {"b" : 90 ,valueOf() {return 3;}, toString() {return "custom";} };
console.log(x - 10 );