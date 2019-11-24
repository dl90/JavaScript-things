const fs = require("fs");
const dirLocation = `${__dirname}`;
const bigArr = [];
const dirArr = [];

readDir(dirLocation);

function readDir (dirName) {

  const dir = fs.readdirSync(dirName);
  for (ele of dir) {

    const stats = fs.lstatSync(ele);

    const path = dirName;
    const name = ele

    const size = stats.size;
    const isDir = stats.isDirectory();
    const isFile = stats.isFile();
    let extension = null;

    const extensionIndex = ele.lastIndexOf(".");
    if(extensionIndex >= 0) {
      extension = ele.slice(extensionIndex);
    } else {
      extension = null;
    }

    bigArr.push(ele);

    console.log(path);
    console.log(name);
    console.log(size);
    console.log("is Dir: " + isDir);
    console.log("is File: " + isFile);
    console.log("extension: " + extension)
    console.log();

    if(isDir) {
      dirArr.push(ele);
    }

  }
  console.log(dirArr);
  console.log(bigArr);

  if(dirArr.length > 0) {
    console.log(__dirname + `/${dirArr[0]}/`);
    readDir(__dirname + `/${dirArr[0]}/`);
  }
}


const objBuilder = (bigArr, dirArr) => {
  const obj = {};
  const objKey = ["Path", "Name", "Size", "Type", "Children", "Extension"];


}
