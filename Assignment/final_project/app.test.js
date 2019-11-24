/**
 * @author Don (dl90)
 */

const readDir = require("./app.js").readDir;
const mkOutputDir = require("./app.js").mkOutputDir;
const unzip = require("./app.js").unzip;
const readImageDir = require("./app.js").readImageDir;
const pngCheck = require("./app.js").pngCheck;
const grayScale = require("./app.js").grayScale;
const grayScaleFunc = require("./app").grayScaleFunc;

test('grayScaleFunc', () => {
  expect(grayScaleFunc([1, 2, 3, 255, 4, 5, 6, 255, 7, 8, 9, 255]))
  .toEqual([2, 2, 2, 255, 5, 5, 5, 255, 8, 8, 8, 255]);
})