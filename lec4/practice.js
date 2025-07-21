const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/home') {
    console.log("Welcome to home page");
    res.write(`<h1>Home Page</h1>`);
  } else if (req.url === '/men') {
    console.log("Welcome to men section");
    res.write(`<h1>Men's Section</h1>`);
  } else if (req.url === '/women') {
    console.log("Welcome to women section");
    res.write(`<h1>Women's Section</h1>`);
  } else if (req.url === '/kid') {
    console.log("Welcome to kid section");
    res.write(`<h1>Kid's Section</h1>`);
  } else {
    console.log("Welcome to cart section");
    res.write(`
      <html>
      <head>
        <title>My Simple Page</title>
      </head>
      <body>
        <h1>Cart Page</h1>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kid">Kid</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </body>
      </html>
    `);
  }

  res.end();
});

server.listen(2003, () => {
  console.log("Server running at http://localhost:2003");
});
