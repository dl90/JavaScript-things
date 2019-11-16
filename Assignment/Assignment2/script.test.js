/*
Don
*/

const readFile = require("./script").readFile;
const dataSplit = require("./script").dataSplit;
const categorySplit = require("./script").categorySplit;
const bubbleSort = require("./script").bubbleSort;
const priceCalc = require("./script").priceCalc;
const stringGeneration = require("./script").stringGeneration;
const writeHtmlFile = require("./script").writeHtmlFile;
const writeFile = require("./script").writeFile;

test('bubbleSort', () => {
  expect(bubbleSort([["dinner", "abcd", "a", "b"],["lunch", "aaab", "a", "b"],["breakfast", "aaaa" , "a" ,"b"]], ["breakfast", "lunch", "dinner"]))
  .toMatchObject([["breakfast", "aaaa" , "a", "$NaN"], ["lunch", "aaab", "a", "$NaN"], ["dinner", "abcd", "a", "$NaN"]]);
});

test('priceCalc', () => {
  expect(priceCalc([["a","a","a","$1"]], ["a","b","c"]))
  .toMatchObject([["a","a","a","$1.80"]]);
})