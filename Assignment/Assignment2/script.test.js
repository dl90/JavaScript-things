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
  expect(bubbleSort([[dinner, abcd],[lunch, aaab],[breakfast, aaaa]], [breakfast, lunch, dinner]))
  .toMatchObject('[[breakfast, aaaa], [lunch, aaab], [dinner, abcd]]');
});

test('priceCalc', () => {
  expect(priceCalc([a,a,a,$10], [abcd]))
  .toMatchObject('[a,a,a,$18.00]');
})