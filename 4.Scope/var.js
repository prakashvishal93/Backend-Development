function fun(){
    console.log(x); // we get undefined - due to lexical scoping
    var x = 10;
    console.log(x);

}
// console.log(x);
fun();