const fsPromise = require('fs').promises

function onResolved () {
  readFilePromise('./test.txt')
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err))
}

function onRejected () {
  console.log('error')
}

const p = new Promise((resolve, reject) => setTimeout(() => resolve(), 3000))

// p.then(onResolved)
// p.catch(onRejected)

const fs = require('fs')
function readFilePromise (filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

fsPromise.readFile('./test.txt')
  .then(data => data.toString())
  .then(data => data.split(/[\n\r\s]+/g))
  .then(arr => arr.map(word => word.toLocaleLowerCase().replace(/[,.;\n]+$/, '')))
  .then(arr => arr.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length
    else {
      for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) === b.charCodeAt(i)) continue
        else if (a.charCodeAt(i) < b.charCodeAt(i)) return -1
        return 1
      }
      return 0
    }
  }))
  .then(arr => {
    const counter = new Map()
    for (const ele of arr) {
      if (counter.has(ele)) counter.set(ele, counter.get(ele) + 1)
      else counter.set(ele, 1)
    }
    console.log(counter)
  })
  .catch(err => console.log(err))
