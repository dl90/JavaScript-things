
const PNG = require("pngjs").PNG;
const fs = require("fs");


/**
 * Averages RGBa pixels to grayscale
 * @param { Array } dataArr Raw RGBa pixels array to average
 */
const grayScaleFunc = (dataArr) => {

  let avg = 0;
  for (let i = 0; i < dataArr.length; i += 4) {
    avg = ((dataArr[i] + dataArr[i + 1] + dataArr[i + 2]) / 3);

    dataArr[i] = avg;
    dataArr[i + 1] = avg;
    dataArr[i + 2] = avg;
  }
  return dataArr;
}


/**
 * Reads PNG file using pngjs
 * @param { String } path directory of file to load from.
 * @param { String } fileName name of file.
 */
function grayScale (path, fileName) {
  return new Promise((resolve, reject) => {

    fs.createReadStream(path + `/${fileName}`)
      .pipe(new PNG({ filterType: 4 }))
      .on('error', function (err) { reject(err) })
      .on('parsed', function () {

        const dataArr = this.data;
        grayScaleFunc(dataArr);

        this.pack().pipe(fs.createWriteStream((path + `/gray-${fileName}`), 'utf-8'));
        console.log('*** ' + path + `/gray-${fileName}` + " - finished writting. ***");
      })
      .on('finish', function () { resolve(console.log("This message will not show up due to not getting the time to resolve.")) });
  })
}


/**
 * Finds the last occurance of index in string and returns whatever that follows it
 * @param { String } str original string
 * @param { String } index split with
 * @returns { String } string following last occurance of index
 */
function splitter (str, index) {
  let extension = null;
  const extensionIndex = str.lastIndexOf(index);
  if (extensionIndex > 0) {
    extension = str.slice(extensionIndex);
  }
  return extension;
}

module.exports = { grayScale, splitter };