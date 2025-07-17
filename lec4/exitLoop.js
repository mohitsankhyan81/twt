const http=require("http");


const server=http.createServer(function requestlistner(req,res){
      console.log(req)
      process.exit();//use to exit from the event loop
    });

  const port=2001;
  server.listen(port,()=>{
    console.log("server is running on the port")
  })