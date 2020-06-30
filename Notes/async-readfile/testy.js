const fs = require("fs");
const { resolve } = require("path");

const getEven = function (fileName) {
  return new Promise((resolve, reject) => {
    if (typeof (fileName) !== 'string') {
      reject(new Error("wrong type of fileName, must be string"));
    } else {
      fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data.split('\n'));
        }
      })
    }
  })
}

getEven("num.txt")
  .then(arr => {
    let b = arr.filter(x => x % 2 === 0)
    console.log(b);
  })
  .catch(msg => console.log(msg));


fs.stat("num.txt", (err, data) => {
  err ? console.log(error) : console.log(data);
})
