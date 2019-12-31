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
  if(str.length > 0) {
    for(let i = 0; i < str.length; i++) {
      if(str[i] === "B") {
        index++;
      }
    }
  }
  return index;
}

const countChar = (str, letter) => {
  let index = 0;
  if( str.length > 0 && letter !== null) {
    for(let i = 0; i < str.length; i++) {
      if(str[i] === letter) {
        index++;
      }
    }
  }
  return index;
}

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));