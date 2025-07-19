//understand requir object 

const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
});

const port=2002;

server.listen(port,()=>{
  console.log("server is running properly");
})