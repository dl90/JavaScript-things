const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
  fs.readdir("files", (err, files) => {
    if (err) {
      throw err;
    }
    let url = request.url;
    if (request.url === "/") {
      url = "/index.html";
    }
    if (request.url === "/favicon.ico") {
      return response.writeHead(404);
    }
    response.writeHead(200, { "Content-Type": "text/html" });

    if (files.length === 0) {
      response.end(fs.readFileSync(__dirname + url))
    } else {
      response.end(`<h1>${files}</h1>`);
    }
  })
}).listen(3000, "localhost", () => {
  console.log("servers up");
});

