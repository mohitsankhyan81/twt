const express=require('express');

const app=express();

app.get("/",(req,res,next)=>{
  console.log("this is my first itration",req.url,req.method);
  res.send("<h1>My name is mohit Sankhyan and i am form kalka</h1>");
});

app.get("/submit",(req,res,next)=>{
  console.log("THis is my second iteration",req.url,req.method);
  res.send("<h1>we are student of chitakar ans i love coding</h1>");
});

const port=4001;
app.listen(port,()=>{
  console.log(`server is http://localhost:${port}`);
})