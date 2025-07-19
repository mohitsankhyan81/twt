const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/req" method="post">');
    res.write('<input type="text" placeholder="Name" name="name"><br><br>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label><br>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
  else if (req.url === '/req') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Open the new page</title></head>');
    res.write('<body><h1>Your name is submitted</h1></body>');
    res.write('</html>');
    res.end();
  }
}); // ✅ this closing brace was missing!

const port = 4001;
server.listen(port, () => {
  console.log("Server is activated now on http://localhost:4000");
});
