const readline = require("readline-sync");
let loop = true, input, stringHistory = "";

do {
  input = readline.question("Pick an instrument: ").toLowerCase();

  switch (input) {
    case "guitar":
    case "drums":
      console.log("\"Rock on!\"");
      stringHistory = stringHistory + "\"Rock on!\"" + "\n";
      break;
    case "piano":
      console.log("\"Play me some Chopin\".");
      stringHistory = stringHistory + "\"Play me some Chopin\"" + "\n";
      break;
    case "violin":
    case "cello":
      console.log("\"String instruments are the best!\".");
      stringHistory = stringHistory + "\"String instruments are the best!\"" + "\n";
      break;
    case "exit":
      loop = false;
      break;
    default:
      console.log("Enter a valid instrument");
  }

} while (loop);

stringHistory.length < 1 ?
  console.log("Thanks for playing!", "\nYou have no history") :
  console.log("Your history was: \n" + stringHistory);


// const readline = require("readline-sync");
// let userInput;
// while (true) {
//   userInput = readline.question("Enter any fruit: ");
//   userInput = userInput.trim().toLowerCase();

//   if (userInput === "quit") break;
//   switch (userInput) {
//     case 'oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'apples':
//       console.log('Apples are $0.32 a pound.');
//       break;
//     default:
//       console.log('Sorry, we are out of ' + userInput + '.');
//   }
//   console.log("Is there anything else you'd like?");
// }
