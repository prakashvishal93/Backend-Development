const http = require('http');
const PORT = 3000;
/*
 * HTTP module contains a function as a createServer
 * this createServer function takes a callback as an input
 * Now inside the callback, we get two arguments
 * - request -> this argument contains all the details about the incoming req
 * - response -> this argument contains functions which can prepare the responses
 * the createServer function return a server object
 */

const server = http.createServer(function exer(request, response) {
  console.log(request.method);
  if (request.url == '/home') {
    response.end('Welcome to Home');
  } else if (request.url == '/faq') {
    response.end('List of FAQs');
  } else {
    response.end('Hello World');
  }
});

server.listen(PORT, function process() {
  console.log('Server is started on :', PORT);
});
