const readLine = require("readline-sync");
const fs = require("fs");
const dataPoints = "dataPoints";

getUserInput()

function getUserInput () {
  const input = readLine.question("Please enter your two points as follows: x1,y1,x2,y2: ");

  // console.log(input);
  // console.log(typeof(input));
  makeDir()
    .then(msg => console.log(msg),
      writeUserInputToFile(input).then(msg => console.log(msg)))
    .catch(err => console.log(err));

}

function makeDir () {
  return new Promise((resolve, reject) => {
    fs.mkdir(__dirname + `/${dataPoints}`, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve("Directory: " + `/${dataPoints}` + " created");
      }
    })
  })
}

function writeUserInputToFile (str) {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + `/${dataPoints}/points.txt`, str, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve("Content written to file successfully.")
      }
    })
  })
}