/**
 * @author Don (dl90)
 */

const server = require("./server").server;
const readDir = require("./server").readDir;
const removeFile = require("./server").removeFile;
const splitter = require("./html-css/modules/gray-scale").splitter;
const grayScale = require("./html-css/modules/gray-scale").grayScale;


test('splitter', () => {
  expect(splitter("ab.cd.e.f.xyz", "."))
  .toBe(".xyz");
})
test('readDirTestFail', () => {
  expect(readDir("docker-volume"))
  .toBe(false);
})
test('removeFile', () => {
  expect(removeFile("docker-volume"))
  .toBe()
})