const readline = require("readline-sync");
// let randNum = 10;
// let inputArr = [];
// let state = true;

const age = parseInt(readline.question("whats your age"));
console.log(age);


// new syntax of finding values from objects (object destructin)
obj = { a: "hi", b: "bye" }
const { a, b } = obj;

console.log(obj);
console.log(a);
console.log(b);


// guessGame(8);

//one way of running it
function guessGame(arg) {
  const randNum = arg
  let guess;
  let text = "Guess a num:"
  let tries = 0;
  let previousGuess = -1;

  do {
    guess = readline.question(text);

    if (guess > randNum) {
      ({ text, tries } = highOrLowCheck(previousGuess, guess, text, tries, "high"));
    } else if (guess < randNum) {
      ({ text, tries } = highOrLowCheck(previousGuess, guess, text, tries, "low"));
    }
    previousGuess = guess
  } while (guess != randNum);

  console.log("got it");
  console.log(`took you ${tries + 1}`);
}

function highOrLowCheck(prevGuess, guess, text, tries, highOrLow) {

  if (prevGuess === guess) {
    text = `you guessed that already, its too ${highOrLow} try again `
  } else {
    text = `you guessed too ${highOrLow} try again `
    tries += 1;
  }

  //*** same name and value use this syntax
  return { text, tries };
}





// while (state) {
// 	let answer = readline.question("input a number");
// 	if (answer === randNum) {
// 		state = false
// 		finalReturn;
// 	}
// }

// function check () {

// 	if(!inputArr.includes(answer)) {
// 		inputArr.push(answer);
// 	}

// 	if(answer > randNum) {
// 		console.log("too hight");
// 	} else if (answer < randNum) {
// 		console.log("too low");
// 	}

// }

// function finalReturn () {
// 	console.log(inputArr.length);
// }