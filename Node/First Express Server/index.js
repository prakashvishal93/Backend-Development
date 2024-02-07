const express = require('express');
const app = express(); // create an express app object by calling the express function
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello WOrld');
});

app.post('/home', function (req, res) {
  res.send('I am from Home');
});
app.patch('/home', function (req, res) {
  res.json({
    messge: 'This is a patch message',
    sucess: true,
    named: 'Vishal Prakash',
  });
});

app.listen(PORT, function () {
  console.log('Server Started : ', PORT);
});
