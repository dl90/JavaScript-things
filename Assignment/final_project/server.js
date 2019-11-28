const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const PNG = require("pngjs").PNG;

const hostName = "localhost";
const port = 8080;
const indexHTML = "index.html";
const uploadedHTML = "upload.html";
const styleCSS = "style.css";
const styleCSSRequest = "/uYWpaV83iuhHZW5f4.css";
const logoAsset = "./Assets/logo.png";
const savePath = __dirname + "/server-upload";


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
        console.log(files.upload.name);
        grayScale(savePath, fileName).then(msg => console.log(msg)).catch(err => console.log(err));

        response.writeHead(200, {'content-type': 'text/html'});
        response.end( fs.readFileSync(uploadedHTML, "utf-8" ))
      }
    })

    form.on('end', function() {

    })
    return;
  }

})



const grayScaleFunc = (dataArr) => {

  let avg = 0;
  for( let i = 0; i < dataArr.length; i+=4) {
    avg = ((dataArr[i] + dataArr[i+1] + dataArr[i+2])/3);

    dataArr[i] = avg;
    dataArr[i+1] = avg;
    dataArr[i+2] = avg;
  }
  return dataArr;
}


function grayScale (path, fileName) {
  return new Promise ((resolve, reject) => {

      fs.createReadStream(path + `/${fileName}`)
        .pipe(new PNG({ filterType: 4 }))
        .on('error', function (err) { reject(err) })
        .on('parsed', function() {

          const dataArr = this.data;
          grayScaleFunc(dataArr);
          
          this.pack().pipe(fs.createWriteStream((path + `/gray-${ fileName }`), 'utf-8'));
          console.log('*** ' + path + `/${ fileName }` + " - finished writting. ***");
        })
        .on('finish', function () { resolve(console.log("This message will not show up due to not getting the time to resolve.")) });
  })
}


server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

