const readline = require("readline-sync");
let loop = true;
let stringHistory = "";

do {
  let input = readline.question("Pick an instrument: ").toLowerCase();

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


if (stringHistory.length < 1) {
  console.log("Thanks for playing!")
  console.log("You have no history");
} else {
  console.log("Your history was: \n" + stringHistory);
}