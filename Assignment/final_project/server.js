const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

const hostName = "localhost";
const port = 8080;
const indexHTML = "index.html";
const uploadedHTML = "upload.html";
const styleCSS = "style.css";
const logoAsset = "./Assets/logo.png";
const savePath = __dirname + "/server-upload";


const server = http.createServer( (request, response) => {

  if (request.url === "/") {
    response.writeHead(200, {'content-type': 'text/html'});
    response.end( fs.readFileSync(indexHTML, "utf-8"));
  }

  if (request.url === "/uYWpaV83iuhHZW5f4.css") {
    response.writeHead(200, {'Content-type' : 'text/css'});
    response.end( fs.readFileSync(styleCSS, "utf-8"));
  }

  if (request.url === "/Assets/logo.png") {
    response.writeHead(200, {'Content-type' : 'image/png'});
    response.end( fs.readFileSync(logoAsset), "binary");
  }

  if (request.url === "/favicon.ico") {
    return response.writeHead(404);
  }

  if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.maxFileSize = 20 * 1024 * 1024;
    form.keepExtensions = true;
    form.uploadDir = savePath;

    form.on ('fileBegin', function(name, file){
      file.path = form.uploadDir + "/" + file.name;
    })

    form.parse(request, function(err, fields, files) {

      if (err) {
        response.writeHead(404, {'content-type': 'text/text'});
        response.end("An error occured: " + err.message);
      } else {

        const uploadedPath = files.upload.path;
        console.log(uploadedPath);

        response.writeHead(200, {'content-type': 'text/html'});
        response.end( fs.readFileSync(uploadedHTML, "utf-8" ))
      }
    })

  return;
  }

  response.writeHead(200, {'content-type': 'text/html'});
  response.end();
})

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

