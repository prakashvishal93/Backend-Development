function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log('Started Downloading from ', url);

    setTimeout(function processDownloading() {
      let data = 'dummy data';
      console.log('Download Completed');
      resolve(data);
    }, 7000);
  });
}

function write(data) {
  return new Promise(function (reject, resolve) {
    console.log('Started writing', data, 'in a file');
    setTimeout(function writingFile() {
      let write = named.txt;
      console.log('Writing Complete');
      resolve(write);
    });
  });
}
