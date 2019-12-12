/**
 * @author Don (dl90)
 */

const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const fetch = require("node-fetch");
const grayScale = require("./html-css/modules/gray-scale").grayScale;
const splitter = require("./html-css/modules/gray-scale").splitter;
const formidResponseHtmlString = require("./html-css/modules/formid-res").htmlSuccess;
const formidResponseFileTypeHtmlString = require("./html-css/modules/formid-res-fail").htmlFail;

//server
const hostName = "localhost";
const port = 8080;

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

//image URL
const beforeLink = "/bNXE0HIDrrmixWb6-before";
const afterLink = "/oTIu5mmWd4f3Hb0z-after";

//no image URL
const noImage = "./html-css/Assets/image-not-found.png";

//Google Vision API key path
const apiKey = require("/Users/don/GitHub/Key/apiKey");
const apiURL = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
// const keyPath = "key.json";

//Google Vision API return tags
const tags = [];
const tagsURL = "/B0CRC9zlpfvWo55T-tags";

//server-uploade file purge time
const purgeTime = 15000;

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

  setTimeout( () => { const arr = fs.readdirSync(savePath) 
    if (arr.length > 0) {
      if (request.url === beforeLink) {
        setTimeout( () => {
          response.writeHead(200, { 'Content-type' : 'image/png' });
          response.end( fs.readFileSync(beforePath), "binary");
        }, 800);
      }

      if (request.url === afterLink) {
        setTimeout( () => {
          response.writeHead(200, { 'Content-type' : 'image/png' });
          response.end( fs.readFileSync(afterPath), "binary");
        }, 800);
      }

    } else {
      if (request.url === beforeLink) {
        response.writeHead(200, { 'Content-type' : 'image/png' });
        response.end( fs.readFileSync(noImage), "binary" );
      }

      if (request.url === afterLink) {
        response.writeHead(200, { 'Content-type' : 'image/png' });
        response.end( fs.readFileSync(noImage), "binary" );
      }
    }
  }, 1000);

  if (request.url === tagsURL) {
    setTimeout( () => {
      response.writeHead(200, { 'Content-type' : 'application/json'});
      response.end(JSON.stringify(tags.sort()));
    }, 500);
    // tags.length = 0;
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


        // ***  Service account method  ***

        // quickstart();
        // async function quickstart() {
        //   // Imports the Google Cloud client library
        //   const vision = require('@google-cloud/vision');

        //   // Creates a client
        //   const client = new vision.ImageAnnotatorClient({
        //     keyFileName: keyPath
        //   });

        //   // Performs label detection on the image file
        //   const [result] = await client.labelDetection(uploadedPath);
        //   const labels = result.labelAnnotations;
        //   console.log('Labels:');
        //   labels.forEach(label => console.log(label.description));
        // }

        grayScale(savePath, fileName).then(msg => console.log(msg)).catch(err => console.log(err));

        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(formidResponseHtmlString);
      }
    })

    form.on('end', function() {
      setTimeout( () => { readDir(savePath) }, 3000);
    });
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
          const filename = ele.slice(0, extensionIndex);
          if (filename.includes("gray-")) {
            grayImgFile = filename;
          } else {
            originalImgFile = filename;
          }
        }
      }
    }

    beforePath = savePath + `/${ originalImgFile }.png`;
    afterPath = savePath + `/${ grayImgFile }.png`;

    //sends the file to google API
    googleAPI(beforePath);

    setTimeout( () => { removeFile(savePath) }, purgeTime);

  } catch (Error) {
    console.log(Error.message);
  }
}

/**
 * Fetches the tags from Google Vision API
 * @param { string } path url including the google api key
 */
function googleAPI (path) {

  const imageFile = fs.readFileSync(path);

  // Convert the image data to a Buffer and base64 encode it.
  const encoded = Buffer.from(imageFile).toString('base64');
  const fetchObj = {
    "requests":[
      {
        "image":{
          "content":encoded
        },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults":10
          }
        ]
      }
    ]
  }

  try {
    fetch(apiURL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" },
      body: JSON.stringify(fetchObj)
    })
    .then(res => res.json())
    .then(json => getTags(json));
  } catch (err) {
    console.log(err);
  }
}

/**
 * Loops through the object and locate the tags from the Google Vision API
 * @param { Object } obj Large object containting tags from Google Vision API
 */
function getTags (obj) {
  for(obj of obj.responses) {
    for(tagObj of obj.labelAnnotations) {
      tags.push(tagObj.description)
    }
  }
  return tags;
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

module.exports = { server, readDir, removeFile, getTags }