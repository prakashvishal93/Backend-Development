const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let bloglist = ['vishal', 'Rahul', 'Sanket', 'Kunal', 'Kushwaha'];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/blogs', (req, res) => {
  return res.status(200).json({
    data: bloglist,
    success: true,
  });
});

app.get('/home', (req, res) => {
  p;
  res.send('hellllooooooooo');
});

app.post('/blogs', (req, res) => {
  console.log(req.query);
});

app.get('/blogs/:id', (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log('Server Started on : ', PORT);
});
