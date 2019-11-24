/**
 * @author Don (dl90)
 */

/**
 * @const fs reference to fs module: https://nodejs.org/api/fs.html.
 */
const fs = require("fs");
/**
 * @const unzipper reference to unzipper package: https://www.npmjs.com/package/unzipper.
 */
const unzipper = require("unzipper");
 /**
  * @const PNG reference to pngjs package: https://www.npmjs.com/package/pngjs.
  */
const PNG = require("pngjs").PNG;


/**
 * Reads current directory.
 * @param { String } dir The directory to read from.
 * @return { Promise } Resolves an array of files in current directory, rejects any errors.
 */
const readDir = (dir) => {
  return new Promise ((resolve, reject ) => {

    fs.readdir(dir, (err, arr) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(arr);
      }
    })
  })
}


/**
 * Unzips file and saves them to unzipPath.
 * @param { String } zipPath The location of the zip file.
 * @param { String } unzipPath The directory where files are unziped to relative to zipPath.
 * @return { Promise } Resolves a completion message, rejects any errors.
 */
const unzip = (zipPath, unzipPath) => {
  return new Promise((resolve, reject) => {

    if (fs.existsSync(zipPath)) {
      fs.createReadStream (zipPath)
      .pipe( unzipper.Extract({ path: unzipPath }))
      .on("error", (err) => { reject(err) })
      .on("close", () => { resolve("Finished Un-ziping.") }) 
    } else {
      reject(new Error("File does not exist."));
    }
  })
}


/**
 * Creates a directory to store pictures that have been grayscaled.
 * @param { Array } arr Array of files/directory used to check if directory to make already exists.
 * @param { String } grayScaleFolderDir Name of directory to make.
 * @param { String } grayScaleFolderPath Path of the directory to make.
 * @return { Promise } Resolves a completion message, rejects a message if directory already exists.
 */
const mkOutputDir = (arr, grayScaleFolderDir, grayScaleFolderPath) => {
  return new Promise((resolve, reject) => {

    if (arr.includes(grayScaleFolderDir)) {
      reject("*** " + grayScaleFolderPath + " - already exists! ***");
    } else {
      fs.mkdir(grayScaleFolderPath, (err) => {
        if (err) {
          reject(err.message);
        } else {
          resolve("*** " + grayScaleFolderPath + " - created! ***");
        }
      })
    }
  })
}


/**
 * Reads the directory where the files are unzipped.
 * @param { String } path directory where the unzipped files are located.
 * @return { Promise } Resolves an array of files in the unzipped directory, rejects any errors.
 */
const readImageDir = (path) => {
  return new Promise((resolve, reject) => {

    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    })
  })
}


/**
 * Filters the directory for only PNG files.
 * @param { Array } arr Array of files from unizpped directory (from readImageDir).
 * @return { Promise } Resolve filtered PNG array, rejects error message if directory is empty.
 */
const pngCheck = (arr) => {
  return new Promise((resolve, reject) => {
    const returnArr = [];

    if (arr.length > 0) {
      for(ele of arr) {
        if (ele !== '__MACOSX' || !ele.startsWith('.')) {
          let strArr = ele.split(".")
          if (strArr[strArr.length - 1] === "png") {
            returnArr.push(ele);
          }
        }
      }
      if (returnArr.length > 0) {
        resolve(returnArr);
      } else {
        reject(new Error("There are no PNG files."))
      }
    } else (
      reject(new Error("Directory is empty."))
    )
  })
}


/**
 * Uses pngjs to parse PNG data to manipulate and reconstructs a new PNG file.
 * @param { Array } arr Array of PNG files to grayscale.
 * @param { String } readUnzipPath Path of directory to read PNG files from.
 * @param { String } grayScaleFolderPath Path of directory to save grayscaled images.
 * @return { Promise } Resolves message when completed (will never show up), rejects any errors from readStream
 */
const grayScale = (arr, readUnzipPath, grayScaleFolderPath) => {
  return new Promise ((resolve, reject) => {

    arr.forEach(element => {
      fs.createReadStream(readUnzipPath + `/${ element }`)
        .pipe(new PNG({ filterType: 4 }))
        .on('error', function (err) { reject(err) })
        .on('parsed', function() {

          const dataArr = this.data;
          grayScaleFunc(dataArr);

          this.pack().pipe(fs.createWriteStream((grayScaleFolderPath + `/${ element }`), 'utf-8'));
          console.log('*** ' + grayScaleFolderPath + `/${ element }` + " - finished writting. ***");
        })
        .on( 'finish', function () { resolve(console.log("This message will not show up due to not getting the time to resolve.")) });
    })
    console.info("GrayScale function exits!");
  })
}


/**
 * Grayscale function using the average method to reassign RGB values.
 * @param { Array } dataArr Large array of RGBa values to grayscale.
 * @return { Array } Large array of RGBa values after its grayscaled.
 */
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


module.exports = { readDir, unzip, mkOutputDir, readImageDir, pngCheck, grayScale, grayScaleFunc }
