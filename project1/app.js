const http = require('http');
const { requestHandler } = require('./handler'); // Corrected import

const server = http.createServer(requestHandler);

const port = 4006;
server.listen(port, () => {
  console.log("Server is activated now on http://localhost:4006");
});
