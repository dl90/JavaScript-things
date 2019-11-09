const moduleFunc = require("./test.js");
const dir = __dirname + "/test";

const main = (dirName, fileExtension) => {
  moduleFunc.expoort(dirName, fileExtension);
}

main(dir, "txt");