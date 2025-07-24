const url = require('url');

const requestHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname.toLowerCase();

  console.log(req.url, req.method);

  if (pathname === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Practice Set</title></head>
      <body>
        <h1>Welcome to Calculator</h1>
        <a href="/calculator">Go To Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }

  else if (pathname === '/calculator') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Here is the Calculator</h1>
        <form method="GET" action="/sum">
          <input type="text" placeholder="First Number" name="first" />
          <input type="text" placeholder="Second Number" name="second" />
          <input type="submit" value="Calculate Sum" />
        </form>
      </body>
      </html>
    `);
    return res.end();
  }

  else if (pathname === '/sum') {
    const query = parsedUrl.query;
    const num1 = parseFloat(query.first);
    const num2 = parseFloat(query.second);
    const result = num1 + num2;

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Result</title></head>
      <body>
        <h1>Sum Result</h1>
        <p>${num1} + ${num2} = <strong>${result}</strong></p>
        <a href="/calculator">Back to Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>404 Not Found</title></head>
    <body>
      <h1>Error 404 - Page Not Found</h1>
      <a href="/">Go to Home</a>
    </body>
    </html>
  `);
  return res.end();
};

// Correct export syntax for destructured import
module.exports = { requestHandler };
