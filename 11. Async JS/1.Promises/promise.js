// How to write a function to download data from a url and not use callback
// instead use promises?

function fetch(url) {
  return new Promise(function (resolve, reject) {
    for (let index = 0; index < 100000000; index++) {}

    console.log('completed');
    resolve('Vishal');
  });
}

fetch('www.google.com');
