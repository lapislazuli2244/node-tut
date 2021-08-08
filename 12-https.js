const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h1>Welcome, This is the home page</h1>`);
    res.end();
  } else if (req.url === "/about") {
    res.write(`<h1>This is the about page</h1>`);
    res.end();
  } else {
    res.write(`<h1>Oops, that does not exist</h1>
    <p>Go back to <a href="/"> Home </a></p>
    `);
    res.end();
  }
});

// the port number is arbitrary
server.listen(5000);
