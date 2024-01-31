let x = fetchData('Any Data');
x.then(
  function success(value) {
    console.log('Value  is ', value);
  },
  function err(err) {
    console.log('Error is', err);
  }
);

