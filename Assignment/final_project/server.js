const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const grayScale = require("./html-css/modules/gray-scale").grayScale;

const hostName = "localhost";
const port = 8080;
const indexHTML = "./html-css/index.html";
// const uploadedHTML = "./html-css/upload.html";
const styleCSS = "./html-css/style.css";
const styleCSSRequest = "/uYWpaV83iuhHZW5f4.css";
const logoAsset = "./html-css/Assets/logo.png";
const savePath = __dirname + "/server-upload";

const beforePath = "/Users/don/GitHub/JavaScript/Assignment/final_project/server-upload/in.png";
const afterPath = "/Users/don/GitHub/JavaScript/Assignment/final_project/server-upload/gray-in.png";


/**
 * @const server creates the http server
 */
const server = http.createServer( (request, response) => {

  if (request.url === "/") {
    response.writeHead(200, {'content-type': 'text/html'});
    response.end( fs.readFileSync(indexHTML, "utf-8"));
  }

  if (request.url === "/favicon.ico") {
    return response.writeHead(404);
  }

  if (request.url === styleCSSRequest) {
    response.writeHead(200, {'Content-type' : 'text/css'});
    response.end( fs.readFileSync(styleCSS, "utf-8"));
  }

  if (request.url === "/Assets/logo.png") {
    response.writeHead(200, {'Content-type' : 'image/png'});
    response.end( fs.readFileSync(logoAsset), "binary");
  }

  if (request.url === "/bNXE0HIDrrmixWb6-before") {
    response.writeHead(200, {'Content-type' : 'image/png'});
    response.end( fs.readFileSync(beforePath), "binary");
  }

  if (request.url === "/oTIu5mmWd4f3Hb0z-after") {
    response.writeHead(200, {'Content-type' : 'image/png'});
    response.end( fs.readFileSync(afterPath), "binary");
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
        const fileName = files.upload.name;
        console.log(uploadedPath);

        grayScale(savePath, fileName).then(msg => console.log(msg)).catch(err => console.log(err));

        // response.writeHead(200, {'content-type': 'text/html'});
        // response.end( fs.readFileSync(uploadedHTML, "utf-8" ))

        response.writeHead(200, {'content-type': 'text/html'});
        response.end(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Success</title>
          <style>
          .back-button {
          border: none;
          font-size: 1.2em;
          padding: 10px;
          margin: 2%;
        }.back-button:hover {
          background-color: lightgray;
        }
          </style>
        </head>

        <body>
          <h1 class="uploaded-message"> File successfully uploaded  😀</h1>
          <button class="back-button"> Go back to homepage! </button>

          <script>
            const homepage = "/"
            const button = document.querySelector(".back-button");

            button.addEventListener('click', event => {
              event.preventDefault();
              window.location.replace(homepage);
            })
          </script>
        </body>
        </html>`
        );
      }
    })

    form.on('end', function() {
      readDir(savePath);
    })
    return;
  }

})


function readDir (path)  {
  const arr = fs.readdirSync(path);
  let grayImgFile = null;
  let originalImgFile = null;

  for(ele of arr) {

    const extensionIndex = ele.lastIndexOf(".");
    if (extensionIndex >= 0) {
      extension = ele.slice(0, extensionIndex);
      if (extension.includes("gray")) {
        grayImgFile = extension;
      } else {
        originalImgFile = extension;
      }
    } else {
      throw new Error ("File does not belong here.")
    }
  }

  console.log(grayImgFile);
  console.log(originalImgFile);
}

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

