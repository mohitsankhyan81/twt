const http=require("http");


const server=http.createServer(function requestlistner(req,res){
      console.log(req)
  });

  const port=2000;
  server.listen(port,()=>{
    console.log("server is running on the port")
  })