function onResolved () {
  console.log('success')
}

function onRejected () {
  console.log('error')
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 3000)
})
promise.then(onResolved)
promise.catch(onRejected)

const fs = require('fs')
function readFilePromise (filename) {
  //  or add "utf8"
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data).toString()
      }
    })
  })
}
readFilePromise('somefile.txt').then((data) => console.log(data))

const fsPromise = require('fs').promises
fsPromise.readFile('file')
  .then((data) => fs.writeFile(data)
    .then((data) => console.log(data)
      .catch((error) => console.err(err))))
