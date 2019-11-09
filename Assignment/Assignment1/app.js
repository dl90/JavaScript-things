/*
Assignment 1
Don Li
Sariah Soohyun Lee
*/

const fs = require ("fs");
const formatter = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'});

module.exports = {getMortgageList, printMortgages}

function getMortgageList () {
    const csvData = fs.readFileSync("mortgages.csv", "utf8");
    const dataArray = csvData.split("\n");
    let mortgageList = [];

    for (const item of dataArray) {
        mortgageList.push(item.split(","));
    }

    return mortgageList;
}

function printMortgages (listOfMortgages, monthNumber) {

    for (const item of listOfMortgages) {

        console.log("\tMortgage " + (parseInt(listOfMortgages.indexOf(item)) + 1 ) + ":");
        console.log("\tStarting Total: " + formatter.format(item[0]));
        console.log("\tMonthly Payment Total: " + formatter.format(item[2]));
        console.log("\tMonthly Interest: " + item[1]);
        console.log();
    }

    for (let i = 0; i < monthNumber; i += 1) {
        let displayMonth = i + 1;
        console.log("\n*** Month " + displayMonth + " ***");

        for (let i of listOfMortgages) {

            let num = i[0];
            //i[o]gets reassigned
            i[0] = newBalance(i[0],i[1],i[2]);

            console.log("\tMortgage " + (parseInt(listOfMortgages.indexOf(i)) + 1 ) + ":");
            console.log("\tRemaining Balance: " + formatter.format(i[0]));
            console.log("\tPayment to Principal: " + formatter.format(i[2] - (i[1] * num)));
            console.log("\tPayment to Interest: " + formatter.format(i[1] * num));
            console.log();
        }
    }
}

/*
monthly interest = monthly rate * morgage balance
paymentToPrincipal = monthly payment - monthly interest
newMorgageBalance = morgageBalance - paymentToPrincipal
*/
function newBalance (balance, rate, monthlypayment) {
    let paymentToPrincipal = monthlypayment - (rate * balance);
    return balance - paymentToPrincipal;
}
