const fs = require('fs');
const dirLocation = __dirname;
const fileTrackingArr = [];
const filePathStackArr = [];
const directoryTrackingArr = [];
const dirString = 'directory';
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

//returns only file objects...
dirReader(filePathStackArr);

/**
 * Passes each directory path for object creation
 * @param {Aray} pathArr arrray of real directory paths
 */
function dirReader (pathArr) {
  const sortPathArr = pathArr.sort();
  console.log(dirLocation); //__dirname
  console.log(sortPathArr); //all directories in __dirname

  // const stack = [];
  // for(dir of sortPathArr) {
  //   stack.push(dir.split("/"));
  // }

  // console.log(stack.sort());
  // for(arr of stack) {
  //   console.log(arr.length);
  // }

  // for(let i = 0; i < sortPathArr.length; i++) {
  //   for(let j = 1; j < sortPathArr.length; j++) {
  //     if ( (sortPathArr[j].includes(sortPathArr[i])) && (sortPathArr[j].length > sortPathArr[i].length)) {
  //       if(!stack.includes(sortPathArr[i])) {
  //         stack.push(sortPathArr[i]);
  //       } else if (!stack.includes(sortPathArr[j])) {
  //         stack.push(sortPathArr[j]);
  //       }
  //     }
  //   }
  // }
  // console.log(stack);

  //reverses the string
  // const revDirLocation = dirLocation.split("").reverse().join("");
  // const revArr = [];



  //reverses each string in array and push it to new array
  // for(str of sortPathArr) {
  //   if(str.includes(dirLocation)) {
  //     revArr.push(str.split("").reverse().join(""));
  //   }
  // }

  // //checks the index
  // for(str of revArr) {
  //   if(str.includes(revDirLocation)) {
  //     let index = str.indexOf(revDirLocation);
  //     console.log(str);
  //     console.log(index);
  //   }
  // }

  do {
    fileObjMaker(pathArr.pop())
    // console.log(pathArr);
  } while (pathArr.length > 0)
}



//options, can reverse arr and start building object from the inside, will need to read dir again...
//possible bad place to generate objects

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

    // if(stats.isDirectory()) {
    //   directoryTrackingArr.push(path);
    //   obj.type = dirString;
    //   obj.child = child;
    // }
    //refactor
    objArr.push(obj);
  }
}

console.log(objArr);

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

// console.log("-----------");
// console.log(fileTrackingArr);

// console.log("------------");
//console logs in a reverse sequence because of Array.pop() so order in array is reversed vs fileTrackingArr
// console.log(directoryTrackingArr);

deepPathSort(directoryTrackingArr)
function deepPathSort (arr) {
  const dirArr = arr;
  const sortDirArr = dirArr.sort();
  const objArr = [];

  for(ele of sortDirArr) {
    // using the number of slashes to determine the depth of the directory
    const obj = {};

    for(let i = 0; i < ele.length; i++) {
      if (obj[ele[0]] === undefined) {
          obj[ele[i]] = 1;
      } else if (obj[ele[i]]) {
          obj[ele[i]] += 1;
      }
    }
    objArr.push(obj['/']);
  }
  filterArr(sortDirArr, objArr)
}

function filterArr (path, pathDepth) {
  // console.log("------------");
  // console.log(path);
  // console.log(pathDepth);

  // let highest = 0;
  // for(num of pathDepth) {
  //   if (num > highest) {
  //     highest = num;
  //   }
  // }
  // console.log(highest);
}


// tracking(fileNameTrackingArr);
/**
 * Do not use
 * Comparator for an array of file names to tracking array
 * @param {Array} arr array of array names 
 */
// function tracking (arr) {
//   for(name of arr) {
//     for(obj of objArr) {
//       if(obj.name === tracking && obj.children != undefined) {
//         readDir(obj.path)
//       } 
//     }
//   }
// }
