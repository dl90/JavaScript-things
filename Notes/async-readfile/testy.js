const fs = require("fs");

const getEven = function (fileName) {
  return new Promise((resolve, reject) => {
    if (typeof (fileName) !== 'string') {
      reject(new Error("wrong type of fileName, must be string"));
    } else {
      fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          //console.log(data);
          let arr = parseNum(data);
          resolve(arr);
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

function parseNum(str) {
  //let numArr = [];
  //array of each line of file
  let arr = str.split('\n');
  //console.log(arr);


  // for(ele of arr) {
  //   //console.log(ele);
  //   let a = ele.split('');
  //   numArr.push( a );
  //   //console.log(numArr);
  // }

  // //numArr is a 2D array
  // //console.log(numArr);
  // let anotherArr = []
  // for(elem of numArr) {
  //   //console.log(elem);
  //   for(ele of elem) {
  //   anotherArr.push(elem);
  //   }
  //console.log(anotherArr);
  return arr
}
