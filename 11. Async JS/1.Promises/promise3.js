function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log('Going to start downloading Data');
    setTimeout(function process() {
      let data = 'Dummy Download Data';
      console.log('Downloaded Complete');
      resolve(data);
    }, 5000);
    console.log('Download Started');
  });
}

console.log('Starting The Program ');
