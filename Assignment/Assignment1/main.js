/*
Assignment 1
Don Li
Sariah Soohyun Lee
*/

const readline = require("readline-sync");
const getMortgageList = require("./app").getMortgageList;
const printMortgages = require("./app").printMortgages;

main();

function main () {
    const listOfMortgages = getMortgageList ();
    let state = true;

    while (state) {
        const userInput = readline.question("How many months to display? (0 to exit)\n");
        var monthNumber = parseInt(userInput);
    
        if (monthNumber === 0) {
            console.log("Exiting program!");
            state = false;
        } else if (userInput.trim().length > 0 && isNaN(monthNumber)) {
            console.log("Unacceptable input, please try again.");
        } else if (monthNumber > 0) {
            console.log();
            printMortgages(listOfMortgages, monthNumber);
            state = false;
        }
    }
}
