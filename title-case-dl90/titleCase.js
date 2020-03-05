
const wordList = {
  a: "a",
  an: "an",
  the: "the",
  in: "in",
  and: "and"
}

function upperCaseFirstLetter(word, index) {

    const firstLetter = word.charAt(0)
    const wordWithoutFirstLetter = word.substring(1)
    return firstLetter.toUpperCase() + wordWithoutFirstLetter;

}

function titleCase(string) {
  const inputArr = string.split(" ");
  //const arr = [];

  const anotherWay = inputArr.map((word, index) => {

    if (index > 0 && index < inputArr.length - 1 && (wordList[word] != undefined)) {
      return word;
    } else {
      return upperCaseFirstLetter(word, index);
    }
  });

  // inputArr.forEach(element => {
  //   const firstLetter = element.charAt(0)
  //   const wordWithoutFirstLetter = element.substring(1)
  //   arr.push(firstLetter.toUpperCase() + wordWithoutFirstLetter)
  // });

  const result = anotherWay.join(" ");
  return result;
}

// console.log(titleCase("test in here"))

module.exports = titleCase