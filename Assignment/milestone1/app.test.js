
const readDir = require("./app.js").readDir;
const mkOutputDir = require("./app.js").mkOutputDir;
const unzip = require("./app.js").unzip;
const readImageDir = require("./app.js").readImageDir;
const pngCheck = require("./app.js").pngCheck;
const grayScale = require("./app.js").grayScale;
const grayScaleFunc = require("./app").grayScaleFunc;

test('readDirTestPass', () => {
  expect(readDir(__dirname))
    .resolves.toEqual([".DS_Store", "app.js", "app.test.js", "main.js", "myFileUnzipGray", "myFileUnzipOirginal", "myfile.zip", "node_modules", "out", "package-lock.json", "package.json"]);
})
test('readDirTestFail', () => {
  expect(readDir("123"))
    .rejects.toEqual(`ENOENT: no such file or directory, scandir '123'`);
})

//*** note: besure to delete myFileUnzipGrayTest folder afterwords if u want to re-test. ***
test('mkOutputDirPass', () => {
  expect(mkOutputDir([".DS_Store", "app.js", "app.test.js", "main.js", "myFileUnzipGray", "myFileUnzipOirginal", "myfile.zip", "node_modules", "out", "package-lock.json", "package.json"],
    "myFileUnzipGrayTest", __dirname + "/myFileUnzipGrayTest-DELETE"))
    .resolves.toEqual("*** " + __dirname + "/myFileUnzipGrayTest-DELETE" + " - created! ***");
})
test('mkOutputDirFail', () => {
  expect(mkOutputDir([".DS_Store", "app.js", "app.test.js", "main.js", "myFileUnzipGray", "myFileUnzipOirginal", "myfile.zip", "node_modules", "out", "package-lock.json", "package.json"],
    "myFileUnzipGray", __dirname + "/myFileUnzipGray"))
    .rejects.toEqual("*** " + __dirname + "/myFileUnzipGray" + " - already exists! ***");
})

test('unzipPass', () => {
  expect(unzip(__dirname + "/myfile.zip", "myFileUnzipOirginal"))
    .resolves.toEqual("Finished Un-ziping.");
})
test('unzipFail', () => {
  expect(unzip(__dirname + "/my.zip", "myFileUnzipOirginal"))
    .rejects.toEqual(Error("File does not exist."));
})

test('readImageDirPass', () => {
  expect(readImageDir(__dirname + '/myFileUnzipOirginal'))
    .resolves.toEqual(["__MACOSX", "in.png", "in1.png", "in2.png"]);
})
test('readImageDirFail', () => {
  expect(readImageDir(__dirname + '/nonExistantDir'))
    .rejects.toEqual(("ENOENT: no such file or directory, scandir '/Users/don/GitHub/JavaScript/Assignment/final_project/nonExistantDir'"));
})

test('pngCheckPass', () => {
  expect(pngCheck(["__MACOSX", "in.png", "in1.html", "in2.jpg", "123.txt"]))
    .resolves.toEqual(["in.png"]);
})
test('pngCheckFail', () => {
  expect(pngCheck([]))
    .rejects.toEqual(Error("Directory is empty."));
})

test('grayScaleFail', () => {
  expect(grayScale([], __dirname + "/myFileUnzipOirginal", __dirname + "/myFileUnzipGrayTest-DELETE-"))
    .resolves.toEqual("GrayScale function exits!");
})

test('grayScaleFuncTest1', () => {
  expect(grayScaleFunc([1, 2, 3, 255, 4, 5, 6, 255, 7, 8, 9, 255]))
    .toEqual([2, 2, 2, 255, 5, 5, 5, 255, 8, 8, 8, 255]);
})