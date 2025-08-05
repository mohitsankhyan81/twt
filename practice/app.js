const express = require('express');
const app = express();

app.get("/", (req, res) => {
  console.log("This is my first iteration", req.url, req.method);
  res.send("<h1>My name is Mohit Sankhyan and I am from Kalka</h1>");
});

app.get("/submit", (req, res) => {
  console.log("This is my second iteration", req.url, req.method);
  res.send("<h1>Robin Singh is from Jammu and is not a good person. He is a weight for Earth.</h1>");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
