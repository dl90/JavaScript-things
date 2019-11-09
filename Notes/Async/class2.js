// Exercise: Create a new project with 4 text files named as follows:
// file1.txt, file2.txt, file3.txt, file4.txt

// file1.txt should have the content: file2.txt 
// file2.txt should have the content: file3.txt
// file3.txt should have the content: file4.txt
// file4.txt should have the content: You reached the end of the maze

// create an index.js file. Inside this file, do the following:
// 1 - Use fs.readFile to read in file1.txt
// 2 - Within the callback, call fs.readFile again. The content
//     within file1.txt is used as the input for your second fs.readFile
//     call.
//  Do not print any results out. Only do error handling each time. 
// 3 - Do this again and again until you finally get to the final file. 
// 4 - When you get to the final file: Print the content of the file, 
//     along with the history of files you travelled through to get there

// Use arrow functions and correctly indent your code

const fs = require("fs");

// function read (index) {
//     if (typeof index === Number) {
//         let fileName = `"file" ${index} ".txt"`;
//     }
//     fs.readFile(fileName, "utf8", (err, data) => {
//         if(err) {
//             return console.err(err);
//         }
//     })
// };

//callback hell
fs.readFile("file1.txt", "utf8", (err, data) => {

});

//await first fn()
//await second fn()

//Promise
