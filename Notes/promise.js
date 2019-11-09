const fs = require("fs");

// fs.rename("./text1.txt", "./text2.txt", (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("rename finished");
//     }
// });

function renamePromises(originalPath, newPath) {
    return new Promise( (resolve, reject) => {
        fs.rename(originalPath, newPath, (err) => {
            if (err) {
                return reject(err.message);
            } else {
                resolve (console.log("rename finished"));
            }
        });
    });
}

renamePromises(__dirname + "/text1.txt", __dirname + "/text2.txt")
    .then( () =>  console.log("no problems here") )
    .catch( () => console.log("we ran into an issue") );