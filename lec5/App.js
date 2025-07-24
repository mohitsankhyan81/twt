const http = require('http');
const requsetHandler=require('./user')
const server = http.createServer(requsetHandler);

const port = 4005;
server.listen(port, () => {
  console.log("Server is activated now on http://localhost:4005");
});