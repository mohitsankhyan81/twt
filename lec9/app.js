// external module
const express = require('express');

const app = express();

app.use("/",(req,res,next)=>{
  console.log("come in first midleware",req.url,req.method);
  res.send("<h1>My name is mohit Sankhhyan</h1>");
  next();
});

app.use("/submit",(req,res,next)=>{
  console.log("cone in second midleware",req.url,req.method);
  res.send("<h1>Welcome to my study section</h1>")
})

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
