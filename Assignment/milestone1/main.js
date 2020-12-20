
const performance = require("perf_hooks");
const start = performance.performance.now();

const readDir = require("./app.js").readDir;
const mkOutputDir = require("./app.js").mkOutputDir;
const unzip = require("./app.js").unzip;
const readImageDir = require("./app.js").readImageDir;
const pngCheck = require("./app.js").pngCheck;
const grayScale = require("./app.js").grayScale;

const directory = (__dirname);
const zipPath = (__dirname + "/myfile.zip");
const unzipPath = ("myFileUnzipOirginal");
const readUnzipPath = (__dirname + `/${unzipPath}`);
const grayScaleFolderDir = ("myFileUnzipGray");
const grayScaleFolderPath = (__dirname + `/${grayScaleFolderDir}`);

main();

function main () {
  readDir(directory)
    .then(arr => {
      mkOutputDir(arr, grayScaleFolderDir, grayScaleFolderPath)
        .then(msg => console.log(msg))
        .catch(err => console.log(err))
    })

  unzip(zipPath, unzipPath)
    .then(msg => {
      console.log(msg);
      return readImageDir(readUnzipPath);
    })
    .then(filesArr => {
      return pngCheck(filesArr);
    })
    .then(filteredArr => {
      grayScale(filteredArr, readUnzipPath, grayScaleFolderPath);
    })
    // .then(msg => console.log(msg))
    .then(console.log("*** Finished all promise calls?!?! ***"))
    .catch(err => console.log(err.message));
}

let end = performance.performance.now();
console.info(("Runtime: " + (end - start) + " ms"));