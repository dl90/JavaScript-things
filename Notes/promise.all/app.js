const fs = require("fs").promises;

Promise.all([fs.readFile("text.txt", "utf8"), fs.readFile("text2.txt", "utf8")])
  .then(arr => {
    console.log(arr)
  })
  .then(console.log("what happens next"))
  .catch(err => {
    console.log(err)
  })