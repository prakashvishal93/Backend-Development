function readLine() {
  return inputString[currentLine++];
}
console.log('Enter first Number');
let x = readLine();
console.log('Enter second Number');
let y = readLine();

console.log(Number(x) - Number(y));
