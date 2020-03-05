const http = require("http")

http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello, Node.js!</h1>");    
  res.end();
}).listen(7890);
