const fs = require('fs');
const dirLocation = __dirname;
const fileTrackingArr = [];
const filePathStackArr = [];
const fileString = 'file';
const objArr = [];

readDir(dirLocation);

/**
 * Reads all files in directory
 * @param {String} path directory path
 */
function readDir (path) {
  const dir = fs.readdirSync(path);
  for (ele of dir) {
    DFSdirCheck(ele, path);
  }
}

/**
 * Goes to the deepest level of until there is no more directories
 * Adds each real directory to the array filePathStackArr for storage
 * @param {String} file name of each file
 * @param {String} location relative location
 */
function DFSdirCheck (file, location) {
  const realPath = location + `/${file}`;
  const stats = fs.lstatSync(realPath);

  if(stats.isDirectory()) {
    filePathStackArr.push(realPath);
    fileTrackingArr.push(realPath);
    readDir(realPath);
  }

  if(stats.isFile()) {
    fileTrackingArr.push(realPath);
  }
}

console.log(filePathStackArr);
console.log(fileTrackingArr);

// //returns only file objects...
// dirReader(filePathStackArr);

/**
 * Passes each directory path for object creation
 * @param {Aray} pathArr arrray of real directory paths
 */
function dirReader (pathArr) {
  const sortPathArr = pathArr.sort();
  // console.log(dirLocation); //__dirname
  // console.log(sortPathArr); //all directories in __dirname

  do {
    fileObjMaker(pathArr.pop())
    // console.log(pathArr);
  } while (pathArr.length > 0)
}

/**
 * @TODO Generates only non directory objects *** not the final large object.
 * @param {String} location array of the real directory
 */
function fileObjMaker(location) {
  const filesArr = fs.readdirSync(location);
  const child = [];

  for(file of filesArr) {
    const path = location + `/${file}`;
    const stats = fs.lstatSync(path);
    const name = file;
    const size = stats.size;
    

    const obj = {};
    obj.path = path;
    obj.name = name;
    obj.size = size;

    if(stats.isFile()) {
      obj.extension = splitter(file, '.');
      obj.type = fileString;
      // console.log(obj);
      child.push(obj);
    }

    //refactor
    objArr.push(obj);
  }
}

// console.log(objArr);

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
