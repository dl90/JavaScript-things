/**
 * @author Don (dl90)
 */

const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const grayScale = require("./html-css/modules/gray-scale").grayScale;
const splitter = require("./html-css/modules/gray-scale").splitter;
const formidResponseHtmlString = require("./html-css/modules/formid-res").htmlSuccess;
const formidResponseFileTypeHtmlString = require("./html-css/modules/formid-res-fail").htmlFail;

//server
const hostName = "localhost";
const port = 8080;
const keyPath = "key.json";

//html
const indexHTMLRequest = "/";
const indexHTML = "./html-css/index.html";

//css
const styleCSSRequest = "/uYWpaV83iuhHZW5f4.css";
const styleCSS = "./html-css/style.css";

//js
const htmlScriptRequest = "/cM2Q6KyZb835gftu.js";
const htmlScript = "./html-css/script.js";

//logo
const logoAssetRequest = "/PYbmhST9I0sPv52Q.png";
const logoAsset = "./html-css/Assets/logo.png";

//pathing
const savePath = __dirname + "/server-upload";
let beforePath, afterPath = __dirname + "/server-upload/";


/**
 * @const server creates the http server
 */
const server = http.createServer( (request, response) => {

  if (request.url === indexHTMLRequest) {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end( fs.readFileSync(indexHTML, "utf-8"));
  }

  if (request.url === "/favicon.ico") {
    return response.writeHead(404);
  }

  if (request.url === styleCSSRequest) {
    response.writeHead(200, { 'Content-type' : 'text/css' });
    response.end( fs.readFileSync(styleCSS, "utf-8"));
  }

  if (request.url === htmlScriptRequest) {
    response.writeHead(200, { 'Content-type' : 'text/javascript' });
    response.end( fs.readFileSync(htmlScript, "utf-8"));
  }

  if (request.url === logoAssetRequest) {
    response.writeHead(200, { 'Content-type' : 'image/png' });
    response.end( fs.readFileSync(logoAsset), "binary");
  }

  //formidable
  if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.maxFileSize = 20 * 1024 * 1024;
    form.keepExtensions = true;
    form.uploadDir = savePath;

    form.on ('fileBegin', function(name, file) {
      file.path = form.uploadDir + "/" + file.name;
    })

    form.parse(request, function(err, fields, files) {
      let check = files.upload.name;
      let exten = splitter(check, ".");

      if (err) {
        response.writeHead(404, { 'content-type': 'text/text' });
        response.end("An error occured: " + err.message);
      } else if (exten !== ".png") {  //backend PNG check
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(formidResponseFileTypeHtmlString);
      } else {
        const uploadedPath = files.upload.path;
        const fileName = files.upload.name;
        console.log("File uploaded to: " + uploadedPath);

        quickstart();
        async function quickstart() {
          // Imports the Google Cloud client library
          const vision = require('@google-cloud/vision');

          // Creates a client
          const client = new vision.ImageAnnotatorClient({
            keyFileName: keyPath
          });

          // Performs label detection on the image file
          const [result] = await client.labelDetection(uploadedPath);
          const labels = result.labelAnnotations;
          console.log('Labels:');
          labels.forEach(label => console.log(label.description));
        }

        grayScale(savePath, fileName).then(msg => console.log(msg)).catch(err => console.log(err));

        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(formidResponseHtmlString);
      }
    })

    form.on('end', function() {
      setTimeout( () => { readDir(savePath) }, 3000);
    });

    const arr = fs.readdirSync(savePath);

    if (arr.length > 0) {
      if (request.url === "/bNXE0HIDrrmixWb6-before") {
        response.writeHead(200, { 'Content-type' : 'image/png' });
        response.end( fs.readFileSync(beforePath), "binary");
      }
    
      if (request.url === "/oTIu5mmWd4f3Hb0z-after") {
        response.writeHead(200, { 'Content-type' : 'image/png' });
        response.end( fs.readFileSync(afterPath), "binary");
      }
    } else {
      if (request.url === "/bNXE0HIDrrmixWb6-before") {
        response.writeHead(200, { 'Content-type' : 'text/text' });
        response.end("waiting for image");
      }
    
      if (request.url === "/oTIu5mmWd4f3Hb0z-after") {
        response.writeHead(200, { 'Content-type' : 'text/text' });
        response.end("waiting for image");
      }
    }

    return;
  }
})

server.listen(port, () => {
  console.log(`Server running at http://${ hostName }:${ port }/`);
});


/**
 * Reads the directory where the file is uploaded
 * @param { String } path Location of where PNG file is uploaded
 */
function readDir (path)  {
  try {
    const arr = fs.readdirSync(path);

    let grayImgFile = null;
    let originalImgFile = null;

    if (arr.length === 0) {
      return false
    } else {
      for(ele of arr) {
        const extensionIndex = ele.lastIndexOf(".");
        if (extensionIndex >= 0) {
          extension = ele.slice(0, extensionIndex);
          if (extension.includes("gray-")) {
            grayImgFile = extension;
          } else {
            originalImgFile = extension;
          }
        }
      }
    }

    beforePath = savePath + `/${ originalImgFile }.png`;
    afterPath = savePath + `/${ grayImgFile }.png`;

    setTimeout(() => {
      console.log(beforePath)
      console.log(afterPath), 5000});

    setTimeout( () => { removeFile(savePath) }, 10000);

  } catch (Error) {
    console.log(Error.message);
  }
}


/**
 * Deletes files from server-uploade folder
 * @param { String } path directory of folder to delete files from
 */
function removeFile (path) {
  try{
    const arr = fs.readdirSync(path)
    for(file of arr) {
      console.log(`Deleting: ${ savePath }/${ file }`);
      fs.unlinkSync(path + `/${ file }`);
    }
  } catch (Error) {
    console.log(Error.message);
  }
}

module.exports = { server, readDir, removeFile }