const http = require('http');
const testing = require('./syntax');
const runtime=require("./runtime");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testing();
  res.end("my name is mohit sankhyan");
  runtime();
});


const port = 2003;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
