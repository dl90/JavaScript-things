/*
  node.js used for real-time event driven systems
  node.js has async non blocking io

  other languages may stop to respond to requests
  other languages use multi-threading to to process more incoming requests
  results in more overhead
  writing multi-threading code is extremely difficult and bug inducing

  I/O takes time, cpu waits, we block operations while io loads
  blocked code (cpu cant execute any code until file is loaded (I/O))

  node uses a C++ library livUV to allow to run I/O in a separate process
  so code following I/O will not be blocked

  JavaScript is event driven at its core
  "at some point in the future, when this click happens, this function is called"

  node is incredible fast when handing high concurrency requests
*/
const fs = require("fs");

let file = fs.readFile("./file.csv", callBackFunction);
function callBackFunction () {
  // this will run after livUV loads the file.
  // this is where you put code that depends on readFile
}

// following code will run (not get blocked) because it not dependent on readFile
let ele = document.getElementById("ele");
ele.addEventListener("click", function () {
  console.log("clicked");
})

// call-back functions allows us to use declarative code
let arr = [1, 2, 3, 4, 5];

/*
  same as: anonymous function (function has no name)
  a name gives a function a reference
*/
let mylooper = function (ele) { console.log(ele) }
function looper (ele) { console.log(ele) }

// forEach is going to loop through each item in array, each time it loops through
// it runs a callback function with the element
arr.forEach(looper);

// different variation with anonymous function
arr.forEach(function (ele) { console.log(ele) })

let file = fs.readFileSync(file); // don't use, it will block your code until file is read
readFile(file, function (contents) { console.log(contents); }) //non blocking
