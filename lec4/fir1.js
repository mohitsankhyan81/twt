const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url; // Get the URL from the request

  // Set content type for all responses
  res.setHeader('Content-Type', 'text/html');

  //routing the code in local host;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Welcome to Home</h1></body>');
    res.write('</html>');
    return res.end();
  } 
  else if (url === '/products') {
    res.write('<html>');
    res.write('<head><title>Products</title></head>');
    res.write('<body><h1>Our Products</h1></body>');
    res.write('</html>');
    return res.end();
  }
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>404 - Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
});

const port = 2002;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});