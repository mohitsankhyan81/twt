const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/submit-details" method="post">');
    res.write('<input type="text" placeholder="Name" name="name"><br><br>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label><br>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
    fs.writeFileSync('user.txt', 'mohit sankhyan');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  // 🔴 All other routes – show 404 or message
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Not Found</title></head>');
  res.write('<body><h1>404 Page Not Found</h1></body>');
  res.write('</html>');
  res.end();
});

const port = 4001;
server.listen(port, () => {
  console.log("Server is activated now on http://localhost:4001");
});
