let iCounter = 0
for (let i = 0; i < 8; i++) {
  let string = "";
  iCounter ++;
  let jCounter = 0;
  for (let j = 0; j < 8; j++) {
    jCounter ++;
    if ((iCounter + jCounter) % 2 !== 0) {
      string += "#";
    }
    string += " ";
  }
  console.log(string );
}
