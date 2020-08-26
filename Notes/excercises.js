let counter = 0;
// isEven(-21);
function isEven(num) {
  if (num === 0) {
    console.log(counter);
    console.log("even");
  } else if (num === 1 || num === -1) {
    console.log(counter);
    console.log("odd");
  } else {
    counter += 1;
    (num > 0) ? isEven(num - 2) : isEven(num + 2);
  }
}

const countChar = (str, letter) => {
  let index = 0;
  if (str.length > 0 && letter !== null) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        index++;
      }
    }
  }
  return index;
}

const reverseArrInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}
console.log(reverseArrInPlace(["A", "B", "C", "D", "E"]));
