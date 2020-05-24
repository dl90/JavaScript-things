const fs = require('fs');

console.table(JSON.stringify(readDir(__dirname + '/test')[0], null, "  "));
console.info(readDir(__dirname + '/test'));

/**
 * Reads all files in directory
 * @param {String} path directory path
 */
function readDir(path) {
  const dir = fs.readdirSync(path);
  const arr = []
  for (ele of dir) {
    arr.push(DFSdirCheck(ele, path));
  }
  return arr
}

/**
 * Goes to the deepest level of until there is no more directories
 * Adds each real directory to the array filePathStackArr for storage
 * @param {String} file name of each file
 * @param {String} location relative location
 */
function DFSdirCheck(file, location) {
  const realPath = location + `/${file}`;
  const stats = fs.lstatSync(realPath);

  const parent = {}
  parent.fullPath = realPath
  parent.relativePath = file;
  parent.name = file
  parent.size = stats.size

  if (stats.isDirectory()) {
    parent.type = 'directory';
    parent.children = readDir(realPath);
  } else if (stats.isFile) {
    parent.type = 'file'
    parent.extension = splitter(file, '.')
  } else {
    parent.type = 'unknown'
  }

  return parent
}

/**
 * Finds the last occurrence of index in string and returns whatever that follows it
 * @param { String } str original string
 * @param { String } index split with
 * @returns { String } string following last occurrence of index
 */
function splitter(str, index) {
  let extension = null;
  const extensionIndex = str.lastIndexOf(index);
  if (extensionIndex > 0) {
    extension = str.slice(extensionIndex);
  }
  return extension;
}
