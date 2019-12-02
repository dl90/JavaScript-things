const fs = require('fs');
const dirLocation = __dirname;
const trackingArr = [];
const objArr = [];
const childrenArr = [];
const dirString = 'directory';
const fileString = 'file';


readDir(dirLocation);

function readDir (a) {
  const dir = fs.readdirSync(a);
  for (ele of dir) {
    readStats(ele, a);
  }
}


function readStats (file, location) {
  const stats = fs.lstatSync(location + `/${file}`);
  const path = location + `/${file}`;
  const name = file;
  const size = stats.size;

  const obj = {};
  obj.path = path;
  obj.name = name;
  obj.size = size;

  if(stats.isFile()) {
    obj.extension = splitter(file, '.');
    obj.type = fileString;
  }

  if(stats.isDirectory()) {
    obj.type = dirString;
    obj.children = []
    // obj.children.push(obj);
    trackingArr.push(ele);
  }
  objArr.push(obj);
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
  if(extensionIndex > 0) {
    extension = str.slice(extensionIndex);
  }
  return extension;
}


tracking(trackingArr)

function tracking (arr) {
  for(tracking of arr) {
    for(obj of objArr) {
      if(obj.name === tracking && obj.children != undefined) {
        readDir(obj.path)
        // childrenArr.push(readDir(obj.path));
        // obj.children = childrenArr
      } 
    }
  }
}

console.log(objArr);
