function onResolved() {
    console.log("success");
}

function onRejected() {
    console.log("error");
}

//creates promise, after 3 seconds, call resolve; go from state pending to state resolve. 
//onResolved will only be called when the promise is resolved
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
});

promise.then(onResolved);
promise.catch(onRejected);



const fs = require("fs");

function readFilePromise(filename) {
    //or add "utf8"
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data).toString();
            }
        });
    });
}

//then takes the resolve data
readFilePromise("somefile.txt").then((data) => {
    console.log(data);
});

const fsPromise = require("fs").promises;

fsPromise.readFile("file")
    .then((data) => fs.writeFile(data)
        .then((data) => console.log(data)
            .catch((error) => console.log(err))))