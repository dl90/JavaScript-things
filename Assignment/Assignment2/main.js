/*
Don
*/

// const performance = require("perf_hooks");
// const start = performance.performance.now();

//------------dependencies----------------//
/**
 * @const fileLocation: the location/file name of file to aquire data from
 */
const fileLocation = (__dirname + "/meals.csv");
// /**
//  * @const writeFileName: the location/file name of .txt file to write to
//  */
// const writeFileName = (__dirname + "/menuOutput.txt");
// /**
//  * @const writeHtmlFileName: the location/file name of html file to write to
//  */
// const writeHtmlFileName = (__dirname + "/index.html");
// /**
//  * @const mealWeightObj: the object storing weights used to sort meal categories
//  */
// const mealWeightObj = {
//   breakfast: 1,
//   brunch: 2,
//   lunch: 3,
//   dinner: 4
// };
// /**
//  * @const HtmlTitle: HTML file title to substitue
//  */
// const HtmlTitle = "Menu";
// /**
//  * @const BootStrapLink: link to bootstrap for HTML file
//  */
// const BootStrapLink = ("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"");



const readFile = require("./script").readFile;
// const dataSplit = require("./script").dataSplit;
// const categorySplit = require("./script").categorySplit;
// const bubbleSort = require("./script").bubbleSort;
// const priceCalc = require("./script").priceCalc;
// const stringGeneration = require("./script").stringGeneration;
// const writeHtmlFile = require("./script").writeHtmlFile;
// const writeFile = require("./script").writeFile;

readFile(fileLocation)
//   .then( data =>  bubbleSort(categorySplit(dataSplit(data), mealWeightObj))

//   ).catch(err => console.log(err));