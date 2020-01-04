const fs = require("fs");
const dir = __dirname + "/test";

function func(dirName, fileExtension, callback) {
  fs.readdir(dirName, "utf-8", (err, list) => {
    if (err) {
      throw err.message;
    } else {
      let newList = list.filter(ele => ele.endsWith(fileExtension));
      callback(newList)
      if (err) {
        throw err.message;
      }
    }
  })
}

function func2(arr) {
  for (element of arr) {
    console.log(element)
  }
}

function expoort(dirName, fileExtension) {
  func(dirName, fileExtension, func2)
}

module.exports = { expoort };

//expoort(dir, "txt")

// function func (dirName, fileExtension) {
//   const dirPromise = new Promise( (resolve, reject) => {
//     fs.readdir(dirName, "utf-8", (err, list) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(list);
//       }
//     })
//   })

//   dirPromise.then( (list) => {
//     //console.log(list);
//     let newList = list.filter(ele => ele.endsWith(fileExtension));
//     return newList
//   }).catch(new Error);
// }
