// Write a function to download data from  a URL

function fetchCustom(url, fn) {
  console.log('Strating Downloding from ', url);
  setTimeout(function process() {
    console.log('Download Completed');

    let response = 'Dummy Data';
    fn(response);
    console.log('Ending the function');
  }, 3000);
}

fetchCustom('www.google.com', function downloadCallback(response) {
  console.log('Downloaded response is ', response);
});
