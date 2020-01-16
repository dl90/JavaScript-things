// chessBoard();
function chessBoard() {
  let string = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 !== 0) {
        string += "#";
      }
      string += " ";
    }
    string += "\n";
  }
  console.log(string);
}

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

const countBs = (str) => {
  let index = 0;
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "B") {
        index++;
      }
    }
  }
  return index;
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

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

const range = (start, end, step = 1) => { // default for third arg is 1
  let arr = [];
  if (end > start && step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (start > end && step < 0)
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }

  return arr;
}

const sum = (arr) => {
  let accumulator = 0;
  for (ele of arr) {
    accumulator += ele;
  }
  return accumulator;
}

// console.log(sum(range(10, 2, -2)));

const reverseArr = (arr) => {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

const reverseArrInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = (temp);
  }
  return arr
}

// console.log(reverseArr(["A", "B", "C"]));
// console.log(reverseArrInPlace(["A", "B", "C", "D", "E"]));


const arrayToList = (arr) => {
  let list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { "value": arr[i], "rest": list };
  }
  return list;
}

console.log(arrayToList([1, 2, 3, 4]));

// const listToArray = (list) => {

// }