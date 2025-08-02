const http = require('http');
const testing = require('./syntax');
const runtime = require('./runtime');
const logical = require('./logical');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  testing();
  runtime();
  logical();
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("My name is Mohit Sankhyan\nYour work is completed");
});

const port = 2003;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
