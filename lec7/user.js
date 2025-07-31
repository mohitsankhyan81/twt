const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req);
  console.log("my name is mohit")
});

const port = 4006;
server.listen(port, () => {
  console.log("Server is activated now on http://localhost:4006");
});