const fs = require("fs").promises;
const userInput = "abcdefg";

const mkDir = (dir) => {

  fs.mkdir(__dirname + `/${dir}`)
    .then(() => fs.writeFile(__dirname + `/${dir}/points.txt`), userInput)
    .then( () => console.log("contents written sucessfully"))
    .catch( err => console.log(err))

}

mkDir("abc");