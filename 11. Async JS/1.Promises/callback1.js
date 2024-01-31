function writeFile(data, fn) {
  console.log('Started Writing Data', data);
  setTimeout(function process() {
    console.log('Writing completed');

    let filename = 'Output.txt';
    fn(filename);
  }, 3000);
}
