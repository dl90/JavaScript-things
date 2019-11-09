const http = require('http');
const fs = require('fs');

// const readFile = new Promise ( (resolve, reject) => {
//   fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
//     if(err) {
//       reject(err.message);
//     } else {
//       resolve(data);
//     }
//   })
// })

// const text = readFile.then(data => console.log(data).catch(err => console.log(err)));


var app = http.createServer( (request, response) => {

  let url = request.url;
  console.log(url);
  if(request.url === "/") {
    url = "/index.html"
  } else if(request.url === "/login") {
    url = "/login.html"
  }
  
  // else if(request.url === "favicon.ico") {
  //   response.writeHead(404);
  //   response.end("favicon not found");
  // }
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  // response.writeHead(200);
  
  //response.end is the end of the connection. Theres no performance cost. can use sync
  response.end(fs.readFileSync(__dirname + url));
});

//port to listen to
app.listen(3000, () => console.log("Server has started"));