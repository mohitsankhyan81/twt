//buffering
//chunk
//buffer to string


const fs = require('fs');

// Create the server
const requsetHandler=((req, res) => {

  // Serve the HTML form
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

  // Handle form submission
  else if (req.url.toLowerCase() === '/submit-details' && req.method === "POST") {
    const body = [];

    // Collect form data in chunks
    req.on("data", chunk => {
      body.push(chunk);
    });

    req.on("end", () => {
      // Combine all chunks and convert to string
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // Example: name=mohit&gender=male

      const parse=new URLSearchParams(parsedBody);
      // const bodyObject={};
      // for(const [key,val] of parse.entries()){
      //   bodyObject[key]=val;
      //   console.log(bodyObject)
      // }

      const bodyObject=Object.fromEntries(parse);
      console.log(bodyObject);

      // Parse the form data using URLSearchParams
      const parsed = new URLSearchParams(parsedBody);
      const name = parsed.get('name');
      const gender = parsed.get('gender');

      // Write form data to a file
      fs.writeFileSync('user.txt', `Name: ${name}, Gender: ${gender}`);

      // Redirect back to home
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return;
  }
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Not Found</title></head>');
  res.write('<body><h1>404 Page Not Found</h1></body>');
  res.write('</html>');
  res.end();
});


module.exports = requsetHandler;